import { ProdutoEstoqueModel } from "../../../domain/models/estoque/produtoEstoque";
import { ListarProdutoEstoquePorEstoqueUseCase } from "../../../domain/useCases/estoque/listar-produto-estoque-por-estoque";
import { AMQPClient } from "../../contracts/amqp-client";

export class ListarProdutoEstoquePorEstoqueService implements ListarProdutoEstoquePorEstoqueUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async listar(idEstoque: number): Promise<ProdutoEstoqueModel[]> {
        const produtosEstoque = await this.amqpClient.send('listar-produtoEstoquePorEstoque', { idEstoque })
        return produtosEstoque
    }
}