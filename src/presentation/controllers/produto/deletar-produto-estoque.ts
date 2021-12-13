import { DeletarProdutoEstoqueUseCase } from "../../../domain/useCases/estoque/deletar-produto-estoque"
import { Validator } from "../../../validation/contracts/validator"
import { Controller } from "../../contracts/controller"
import { HttpRequest, HttpResponse } from "../../contracts/http"
import { badRequest, noContent, serverError } from "../../contracts/http-helper"

export class DeletarProdutoEstoqueController implements Controller {
    constructor(private readonly validator: Validator, private readonly deletarProdutoEstoqueUseCase: DeletarProdutoEstoqueUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }

            const { idProduto, idEstoque } = httpRequest.params.id

            const result = await this.deletarProdutoEstoqueUseCase.deletar({
                idProduto,
                idEstoque
            })

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