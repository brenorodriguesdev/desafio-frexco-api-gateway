import { BuscarEstoqueService } from "../../../../data/services/estoque/buscar-estoque"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { BuscarEstoqueController } from "../../../../presentation/controllers/estoque/buscar-estoque"
import { makeBuscarEstoqueValidator } from "../../validators/estoque/buscar-estoque"

export const makeBuscarEstoqueController = (): Controller => {
    const buscarEstoqueService = new BuscarEstoqueService(new AMQPClientAdapter())
    return new BuscarEstoqueController(makeBuscarEstoqueValidator(), buscarEstoqueService)
}