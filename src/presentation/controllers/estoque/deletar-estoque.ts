import { DeletarEstoqueUseCase } from "../../../domain/useCases/estoque/deletar-estoque"
import { Validator } from "../../../validation/contracts/validator"
import { Controller } from "../../contracts/controller"
import { HttpRequest, HttpResponse } from "../../contracts/http"
import { badRequest, noContent, serverError } from "../../contracts/http-helper"

export class DeletarEstoqueController implements Controller {
    constructor (private readonly validator: Validator, private readonly deletarEstoqueUseCase: DeletarEstoqueUseCase) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }
            const result = await this.deletarEstoqueUseCase.deletar(httpRequest.params.id)
            if (result instanceof Error) {
                return badRequest(result)
            }
            return noContent()
        } catch (error) {
            return serverError()
        }
    }
}