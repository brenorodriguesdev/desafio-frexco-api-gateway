import { DeletarProdutoEstoqueService } from "../../../../data/services/produto/deletar-produto-estoque"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { DeletarProdutoEstoqueController } from "../../../../presentation/controllers/produto/deletar-produto-estoque"
import { makeDeletarEstoqueValidator } from "../../validators/estoque/deletar-estoque"

export const makeDeletarProdutoEstoqueController = (): Controller => {
    const deletarProdutoEstoqueService = new DeletarProdutoEstoqueService(new AMQPClientAdapter())
    return new DeletarProdutoEstoqueController(makeDeletarEstoqueValidator(), deletarProdutoEstoqueService)
}