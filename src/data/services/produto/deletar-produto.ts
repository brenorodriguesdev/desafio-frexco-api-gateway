import { DeletarProdutoUseCase } from "../../../domain/useCases/produto/deletar-produto";
import { AMQPClient } from "../../contracts/amqp-client";

export class DeletarProdutoService implements DeletarProdutoUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async deletar(id: number): Promise<void | Error> {
        const response = await this.amqpClient.send('deletar-produto', { id: 1 })
        if (response['error']) {
            return new Error(response['error'])
        }
    }
}