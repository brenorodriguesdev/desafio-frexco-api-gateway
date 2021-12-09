import { DeletarEstoqueService } from "../../../../data/services/estoque/deletar-estoque"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { DeletarEstoqueController } from "../../../../presentation/controllers/estoque/deletar-estoque"
import { makeDeletarEstoqueValidator } from "../../validators/estoque/deletar-estoque"

export const makeDeletarEstoqueController = (): Controller => {
    const deletarEstoqueService = new DeletarEstoqueService(new AMQPClientAdapter())
    return new DeletarEstoqueController(makeDeletarEstoqueValidator(), deletarEstoqueService)
}