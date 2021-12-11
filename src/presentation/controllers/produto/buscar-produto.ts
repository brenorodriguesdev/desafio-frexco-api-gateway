import { BuscarProdutoUseCase } from "../../../domain/useCases/produto/buscar-produto"
import { Validator } from "../../../validation/contracts/validator"
import { Controller } from "../../contracts/controller"
import { HttpRequest, HttpResponse } from "../../contracts/http"
import { badRequest, ok, serverError } from "../../contracts/http-helper"

export class BuscarProdutoController implements Controller {
    constructor (private readonly validator: Validator, private readonly buscarProdutoUseCase: BuscarProdutoUseCase) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }
            const produto = await this.buscarProdutoUseCase.buscar(httpRequest.params.id)
            if (produto instanceof Error) {
                return badRequest(produto)
            }
            return ok(produto)
        } catch (error) {
            return serverError()
        }
    }
}