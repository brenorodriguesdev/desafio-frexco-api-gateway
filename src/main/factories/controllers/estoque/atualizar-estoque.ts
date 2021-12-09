import { AtualizarEstoqueService } from "../../../../data/services/estoque/atualizar-estoque"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { AtualizarEstoqueController } from "../../../../presentation/controllers/estoque/atualizar-estoque"
import { makeCriarEstoqueValidator } from "../../validators/estoque/criar-estoque"

export const makeAtualizarEstoqueController = (): Controller => {
    const atualizarEstoqueService = new AtualizarEstoqueService(new AMQPClientAdapter())
    return new AtualizarEstoqueController(makeCriarEstoqueValidator(), atualizarEstoqueService)
}