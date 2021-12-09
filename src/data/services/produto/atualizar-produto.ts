import { AtualizarProdutoModel } from "../../../domain/models/produto/atualizar-produto";
import { AtualizarProdutoUseCase } from "../../../domain/useCases/produto/atualizar-produto";
import { AMQPClient } from "../../contracts/amqp-client";

export class AtualizarProdutoService implements AtualizarProdutoUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async atualizar(data: AtualizarProdutoModel): Promise<void | Error> {
        const response = await this.amqpClient.send('atualizar-produto', data)
        if (response['error']) {
            return new Error(response['error'])
        }
    }
}