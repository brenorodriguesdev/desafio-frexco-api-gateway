import { AdicionarProdutoEstoqueUseCase } from "../../../domain/useCases/estoque/adicionar-produto-estoque"
import { Validator } from "../../../validation/contracts/validator"
import { Controller } from "../../contracts/controller"
import { HttpRequest, HttpResponse } from "../../contracts/http"
import { badRequest, created, serverError } from "../../contracts/http-helper"

export class AdicionarProdutoEstoqueController implements Controller {
    constructor(private readonly validator: Validator, private readonly adicionarProdutoEstoqueUseCase: AdicionarProdutoEstoqueUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            const { idProduto, idEstoque } = httpRequest.body

            const result = await this.adicionarProdutoEstoqueUseCase.adicionar({
                idProduto,
                idEstoque
            })

            if (result instanceof Error) {
                return badRequest(result)
            }
            return created()
        } catch (error) {
            console.log(error.message)
            return serverError()
        }
    }
}