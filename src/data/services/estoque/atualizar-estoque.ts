import { EstoqueModel } from "../../../domain/models/estoque/estoque";
import { AtualizarEstoqueUseCase } from "../../../domain/useCases/estoque/atualizar-estoque";
import { AMQPClient } from "../../contracts/amqp-client";

export class AtualizarEstoqueService implements AtualizarEstoqueUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async atualizar(data: EstoqueModel): Promise<void | Error> {
        const response = await this.amqpClient.send('atualizar-estoque', data)
        if (response && response['error']) {
            return new Error(response['error'])
        }
    }
}