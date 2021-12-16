import { AdicionarProdutoEstoqueService } from "../../../../data/services/estoque/adicionar-produto-estoque"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { AdicionarProdutoEstoqueController } from "../../../../presentation/controllers/estoque/adicionar-produto-estoque"
import { makeAdicionarProdutoEstoqueValidator } from "../../validators/produto/adicionar-produto-estoque"

export const makeAdicionarProdutoEstoqueController = (): Controller => {
    const adicionarProdutoEstoqueService = new AdicionarProdutoEstoqueService(new AMQPClientAdapter())
    return new AdicionarProdutoEstoqueController(makeAdicionarProdutoEstoqueValidator(), adicionarProdutoEstoqueService)
}