import { AdicionarProdutoEstoqueModel } from "../../../domain/models/estoque/adicionar-produto-estoque";
import { DeletarProdutoEstoqueUseCase } from "../../../domain/useCases/estoque/deletar-produto-estoque";
import { AMQPClient } from "../../contracts/amqp-client";

export class DeletarProdutoEstoqueService implements DeletarProdutoEstoqueUseCase {
    constructor(private readonly amqpClient: AMQPClient) { }
    async deletar(data: AdicionarProdutoEstoqueModel): Promise<void | Error> {
        const response = await this.amqpClient.send('deletar-produtoEstoque', data)
        if (response && response['error']) {
            return new Error(response['error'])
        }
    }
}