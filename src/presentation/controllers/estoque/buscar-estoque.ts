import { BuscarEstoqueUseCase } from "../../../domain/useCases/estoque/buscar-estoque"
import { Validator } from "../../../validation/contracts/validator"
import { Controller } from "../../contracts/controller"
import { HttpRequest, HttpResponse } from "../../contracts/http"
import { badRequest, ok, serverError } from "../../contracts/http-helper"

export class BuscarEstoqueController implements Controller {
    constructor (private readonly validator: Validator, private readonly buscarEstoqueUseCase: BuscarEstoqueUseCase) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }
            const estoque = await this.buscarEstoqueUseCase.buscar(httpRequest.params.id)
            if (estoque instanceof Error) {
                return badRequest(estoque)
            }
            return ok(estoque)
        } catch (error) {
            return serverError()
        }
    }
}