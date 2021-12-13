import { ListarProdutoEstoquePorEstoqueUseCase } from "../../../domain/useCases/estoque/listar-produto-estoque-por-estoque"
import { Validator } from "../../../validation/contracts/validator"
import { Controller } from "../../contracts/controller"
import { HttpRequest, HttpResponse } from "../../contracts/http"
import { badRequest, ok, serverError } from "../../contracts/http-helper"

export class ListarProdutoEstoquePorEstoqueController implements Controller {
    constructor (private readonly validator: Validator, private readonly listarProdutoEstoquePorEstoqueUseCase: ListarProdutoEstoquePorEstoqueUseCase) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }
            const produtosEstoque = await this.listarProdutoEstoquePorEstoqueUseCase.listar(httpRequest.params.idEstoque)
            if (produtosEstoque instanceof Error) {
                return badRequest(produtosEstoque)
            }
            return ok(produtosEstoque)
        } catch (error) {
            return serverError()
        }
    }
}