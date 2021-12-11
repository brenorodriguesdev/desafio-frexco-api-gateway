import { Router } from "express"
import { adaptRouter } from "../adapters/express-controller"
import { makeAtualizarProdutoController } from "../factories/controllers/produto/atualizar-produto"
import { makeBuscarProdutoController } from "../factories/controllers/produto/buscar-produto"
import { makeCriarProdutoController } from "../factories/controllers/produto/criar-produto"
import { makeDeletarProdutoController } from "../factories/controllers/produto/deletar-produto"
import { makeListarProdutosController } from "../factories/controllers/produto/listar-produtos"

export default (router: Router): void => {
    router.put('/atualizarProduto', adaptRouter(makeAtualizarProdutoController()))
    router.post('/criarProduto', adaptRouter(makeCriarProdutoController()))
    router.delete('/deletarProduto/:id', adaptRouter(makeDeletarProdutoController()))
    router.get('/listarProdutos', adaptRouter(makeListarProdutosController()))
    router.get('/buscarProduto/:id', adaptRouter(makeBuscarProdutoController()))
}