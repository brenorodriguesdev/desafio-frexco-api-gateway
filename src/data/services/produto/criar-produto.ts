import { CriarProdutoModel } from "../../../domain/models/produto/criar-produto";
import { ProdutoModel } from "../../../domain/models/produto/produto";
import { CriarProdutoUseCase } from "../../../domain/useCases/produto/criar-produto";
import { AMQPClient } from "../../contracts/amqp-client";

export class CriarProdutoService implements CriarProdutoUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async criar(data: CriarProdutoModel): Promise<ProdutoModel| Error> {
        const produto = await this.amqpClient.send('criar-produto', data)
        if (produto && produto['error']) {
            return new Error(produto['error'])
        }
        return produto
    }
}