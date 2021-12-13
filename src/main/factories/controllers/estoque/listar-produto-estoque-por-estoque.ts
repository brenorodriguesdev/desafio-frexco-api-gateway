import { ListarProdutoEstoquePorEstoqueService } from "../../../../data/services/estoque/listar-produto-estoque-por-estoque"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { ListarProdutoEstoquePorEstoqueController } from "../../../../presentation/controllers/estoque/listar-produto-estoque-por-estoque"
import { makeListarProdutoEstoquePorEstoqueValidator } from "../../validators/estoque/listar-produto-estoque-por-estoque"

export const makeListarProdutoEstoquePorEstoqueController = (): Controller => {
    const listarProdutoEstoquePorEstoqueService = new ListarProdutoEstoquePorEstoqueService(new AMQPClientAdapter())
    return new ListarProdutoEstoquePorEstoqueController(makeListarProdutoEstoquePorEstoqueValidator(), listarProdutoEstoquePorEstoqueService)
}