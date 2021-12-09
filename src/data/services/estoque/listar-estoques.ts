import { EstoqueModel } from "../../../domain/models/estoque/estoque";
import { ListarEstoquesUseCase } from "../../../domain/useCases/estoque/listar-estoques";
import { AMQPClient } from "../../contracts/amqp-client";

export class ListarEstoquesService implements ListarEstoquesUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async listar(): Promise<EstoqueModel[]> {
        const estoques = await this.amqpClient.send('listar-estoques', {})
        return estoques
    }
}