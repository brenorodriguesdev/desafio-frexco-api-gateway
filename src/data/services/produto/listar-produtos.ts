import { ProdutoModel } from "../../../domain/models/produto/produto";
import { ListarProdutosUseCase } from "../../../domain/useCases/produto/listar-produtos";
import { AMQPClient } from "../../contracts/amqp-client";

export class ListarProdutosService implements ListarProdutosUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async listar(): Promise<ProdutoModel[]> {
        const produtos = await this.amqpClient.send('listar-produtos', {})
        return produtos
    }
}