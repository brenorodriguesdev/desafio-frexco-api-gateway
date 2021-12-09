import { DeletarEstoqueUseCase } from "../../../domain/useCases/estoque/deletar-estoque";
import { AMQPClient } from "../../contracts/amqp-client";

export class DeletarEstoqueService implements DeletarEstoqueUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async deletar(id: number): Promise<void | Error> {
        const response = await this.amqpClient.send('deletar-estoque', { id })
        if (response['error']) {
            return new Error(response['error'])
        }
    }
}