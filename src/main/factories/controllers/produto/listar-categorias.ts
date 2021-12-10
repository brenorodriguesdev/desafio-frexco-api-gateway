import { ListarCategoriasService } from "../../../../data/services/produto/listar-categorias"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { ListarCategoriasController } from "../../../../presentation/controllers/produto/listar-categorias"

export const makeListarCategoriasController = (): Controller => {
    const listarCategoriasService = new ListarCategoriasService(new AMQPClientAdapter())
    return new ListarCategoriasController(listarCategoriasService)
}