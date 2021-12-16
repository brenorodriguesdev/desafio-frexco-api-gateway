import { DeletarProdutoEstoqueService } from "../../../../data/services/estoque/deletar-produto-estoque"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { DeletarProdutoEstoqueController } from "../../../../presentation/controllers/estoque/deletar-produto-estoque"
import { makeDeletarProdutoEstoqueValidator } from "../../validators/produto/deletar-produto-estoque"

export const makeDeletarProdutoEstoqueController = (): Controller => {
    const deletarProdutoEstoqueService = new DeletarProdutoEstoqueService(new AMQPClientAdapter())
    return new DeletarProdutoEstoqueController(makeDeletarProdutoEstoqueValidator(), deletarProdutoEstoqueService)
}