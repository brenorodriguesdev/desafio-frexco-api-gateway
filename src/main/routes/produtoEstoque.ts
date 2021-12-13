import { Router } from "express"
import { adaptRouter } from "../adapters/express-controller"
import { makeAdicionarProdutoEstoqueController } from "../factories/controllers/produto/adicionar-produto-estoque"
import { makeDeletarProdutoEstoqueController } from "../factories/controllers/produto/deletar-produto-estoque"

export default (router: Router): void => {
    router.post('/adicionarProdutoEstoque', adaptRouter(makeAdicionarProdutoEstoqueController()))
    router.delete('/deletarProdutoEstoque/:idProduto/:idEstoque', adaptRouter(makeDeletarProdutoEstoqueController()))
}