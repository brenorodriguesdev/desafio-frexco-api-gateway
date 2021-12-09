import { EstoqueModel } from "../../../domain/models/estoque/estoque";
import { CriarEstoqueUseCase } from "../../../domain/useCases/estoque/criar-estoque";
import { AMQPClient } from "../../contracts/amqp-client";

export class CriarEstoqueService implements CriarEstoqueUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async criar(data: EstoqueModel): Promise<EstoqueModel> {
        const estoque = await this.amqpClient.send('criar-estoque', data)
        return estoque
    }
}