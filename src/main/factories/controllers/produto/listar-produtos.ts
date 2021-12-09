import { ListarProdutosService } from "../../../../data/services/produto/listar-produtos"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { ListarProdutosController } from "../../../../presentation/controllers/produto/listar-produtos"

export const makeListarProdutosController = (): Controller => {
    const listarProdutosService = new ListarProdutosService(new AMQPClientAdapter())
    return new ListarProdutosController(listarProdutosService)
}