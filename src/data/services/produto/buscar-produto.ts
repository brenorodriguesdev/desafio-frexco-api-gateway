import { ProdutoModel } from "../../../domain/models/produto/produto";
import { BuscarProdutoUseCase } from "../../../domain/useCases/produto/buscar-produto";
import { AMQPClient } from "../../contracts/amqp-client";

export class BuscarProdutoService implements BuscarProdutoUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async buscar(id: number): Promise<ProdutoModel| Error> {
        const produto = await this.amqpClient.send('buscar-produto', { id })
        if (produto && produto['error']) {
            return new Error(produto['error'])
        }
        return produto
    }
}