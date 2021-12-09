import { CriarEstoqueUseCase } from "../../../domain/useCases/estoque/criar-estoque"
import { Validator } from "../../../validation/contracts/validator"
import { Controller } from "../../contracts/controller"
import { HttpRequest, HttpResponse } from "../../contracts/http"
import { badRequest, ok, serverError } from "../../contracts/http-helper"

export class CriarEstoqueController implements Controller {
    constructor (private readonly validator: Validator, private readonly criarEstoqueUseCase: CriarEstoqueUseCase) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const estoque = await this.criarEstoqueUseCase.criar(httpRequest.body)
            if (estoque instanceof Error) {
                return badRequest(estoque)
            }
            return ok(estoque)
        } catch (error) {
            return serverError()
        }
    }
}