import { ListarEstoquesService } from "../../../../data/services/estoque/listar-estoques"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { ListarEstoquesController } from "../../../../presentation/controllers/estoque/listar-estoques"

export const makeListarEstoquesController = (): Controller => {
    const listarEstoquesService = new ListarEstoquesService(new AMQPClientAdapter())
    return new ListarEstoquesController(listarEstoquesService)
}