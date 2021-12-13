import { Router } from "express"
import { adaptRouter } from "../adapters/express-controller"
import { makeAtualizarEstoqueController } from "../factories/controllers/estoque/atualizar-estoque"
import { makeBuscarEstoqueController } from "../factories/controllers/estoque/buscar-estoque"
import { makeCriarEstoqueController } from "../factories/controllers/estoque/criar-estoque"
import { makeDeletarEstoqueController } from "../factories/controllers/estoque/deletar-estoque"
import { makeListarEstoquesController } from "../factories/controllers/estoque/listar-estoques"

export default (router: Router): void => {
    router.put('/atualizarEstoque', adaptRouter(makeAtualizarEstoqueController()))
    router.post('/criarEstoque', adaptRouter(makeCriarEstoqueController()))
    router.delete('/deletarEstoque/:id', adaptRouter(makeDeletarEstoqueController()))
    router.get('/listarEstoques', adaptRouter(makeListarEstoquesController()))
    router.get('/buscarEstoque/:id', adaptRouter(makeBuscarEstoqueController()))
}