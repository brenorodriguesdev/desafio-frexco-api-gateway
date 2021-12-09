import { CriarProdutoUseCase } from "../../../domain/useCases/produto/criar-produto"
import { Validator } from "../../../validation/contracts/validator"
import { Controller } from "../../contracts/controller"
import { HttpRequest, HttpResponse } from "../../contracts/http"
import { badRequest, ok, serverError } from "../../contracts/http-helper"

export class CriarProdutoController implements Controller {
    constructor (private readonly validator: Validator, private readonly criarProdutoUseCase: CriarProdutoUseCase) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const produto = await this.criarProdutoUseCase.criar(httpRequest.body)
            if (produto instanceof Error) {
                return badRequest(produto)
            }
            return ok(produto)
        } catch (error) {
            return serverError()
        }
    }
}