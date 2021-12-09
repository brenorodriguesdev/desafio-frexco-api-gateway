import { AtualizarProdutoUseCase } from "../../../domain/useCases/produto/atualizar-produto"
import { Validator } from "../../../validation/contracts/validator"
import { Controller } from "../../contracts/controller"
import { HttpRequest, HttpResponse } from "../../contracts/http"
import { badRequest, noContent, serverError } from "../../contracts/http-helper"

export class AtualizarProdutoController implements Controller {
    constructor (private readonly validator: Validator, private readonly atualizarProdutoUseCase: AtualizarProdutoUseCase) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const result = await this.atualizarProdutoUseCase.atualizar(httpRequest.body)
            if (result instanceof Error) {
                return badRequest(result)
            }
            return noContent()
        } catch (error) {
            return serverError()
        }
    }
}