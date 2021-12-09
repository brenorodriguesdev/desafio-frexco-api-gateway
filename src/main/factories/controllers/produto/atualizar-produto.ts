import { AtualizarProdutoService } from "../../../../data/services/produto/atualizar-produto"
import { AMQPClientAdapter } from "../../../../infra/amqp-client"
import { Controller } from "../../../../presentation/contracts/controller"
import { AtualizarProdutoController } from "../../../../presentation/controllers/produto/atualizar-produto"
import { makeAtualizarProdutoValidator } from "../../validators/produto/atualizar-produto"

export const makeAtualizarProdutoController = (): Controller => {
    const atualizarProdutoService = new AtualizarProdutoService(new AMQPClientAdapter())
    return new AtualizarProdutoController(makeAtualizarProdutoValidator(), atualizarProdutoService)
}