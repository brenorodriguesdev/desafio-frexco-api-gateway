import { AdicionarProdutoEstoqueModel } from "../../../domain/models/produto/adicionar-produto-estoque";
import { AdicionarProdutoEstoqueUseCase } from "../../../domain/useCases/estoque/adicionar-produto-estoque";
import { AMQPClient } from "../../contracts/amqp-client";

export class AdicionarProdutoEstoqueService implements AdicionarProdutoEstoqueUseCase {
    constructor(private readonly amqpClient: AMQPClient) { }
    async adicionar(data: AdicionarProdutoEstoqueModel): Promise<void | Error> {
        const response = await this.amqpClient.send('adicionar-produtoEstoque', data)
        if (response && response['error']) {
            return new Error(response['error'])
        }
    }
}