import { DeletarProdutoUseCase } from "../../../domain/useCases/produto/deletar-produto"
import { Validator } from "../../../validation/contracts/validator"
import { Controller } from "../../contracts/controller"
import { HttpRequest, HttpResponse } from "../../contracts/http"
import { badRequest, noContent, serverError } from "../../contracts/http-helper"

export class DeletarProdutoController implements Controller {
    constructor (private readonly validator: Validator, private readonly deletarProdutoUseCase: DeletarProdutoUseCase) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }
            const result = await this.deletarProdutoUseCase.deletar(httpRequest.params.id)
            if (result instanceof Error) {
                return badRequest(result)
            }
            return noContent()
        } catch (error) {
            console.log(error.message)
            return serverError()
        }
    }
}