import { Router } from "express"
import { adaptRouter } from "../adapters/express-controller"
import { makeListarCategoriasController } from "../factories/controllers/produto/listar-categorias"

export default (router: Router): void => {
    router.get('/listarCategorias', adaptRouter(makeListarCategoriasController()))
}