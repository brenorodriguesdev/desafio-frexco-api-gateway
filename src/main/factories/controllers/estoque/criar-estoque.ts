import { CriarEstoqueService } from "../../../../data/services/estoque/criar-estoque"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { CriarEstoqueController } from "../../../../presentation/controllers/estoque/criar-estoque"
import { makeCriarEstoqueValidator } from "../../validators/estoque/criar-estoque"

export const makeCriarEstoqueController = (): Controller => {
    const criarEstoqueService = new CriarEstoqueService(new AMQPClientAdapter())
    return new CriarEstoqueController(makeCriarEstoqueValidator(), criarEstoqueService)
}