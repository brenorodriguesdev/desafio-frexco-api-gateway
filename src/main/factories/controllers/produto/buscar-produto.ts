import { BuscarProdutoService } from "../../../../data/services/produto/buscar-produto"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { BuscarProdutoController } from "../../../../presentation/controllers/produto/buscar-produto"
import { makeBuscarProdutoValidator } from "../../validators/produto/buscar-produto"

export const makeBuscarProdutoController = (): Controller => {
    const buscarProdutoService = new BuscarProdutoService(new AMQPClientAdapter())
    return new BuscarProdutoController(makeBuscarProdutoValidator(), buscarProdutoService)
}