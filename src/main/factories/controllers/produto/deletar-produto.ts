import { DeletarProdutoService } from "../../../../data/services/produto/deletar-produto"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { DeletarProdutoController } from "../../../../presentation/controllers/produto/deletar-produto"
import { makeDeletarProdutoValidator } from "../../validators/produto/deletar-produto"

export const makeDeletarProdutoController = (): Controller => {
    const deletarProdutoService = new DeletarProdutoService(new AMQPClientAdapter())
    return new DeletarProdutoController(makeDeletarProdutoValidator(), deletarProdutoService)
}