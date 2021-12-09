import { ListarEstoquesUseCase } from "../../../domain/useCases/estoque/listar-estoques";
import { Controller } from "../../contracts/controller";
import { HttpResponse } from "../../contracts/http";
import { ok, serverError } from "../../contracts/http-helper";

export class ListarEstoquesController implements Controller {
    constructor (private readonly listarEstoquesUseCase: ListarEstoquesUseCase) {}
    async handle(): Promise<HttpResponse> {
        try {
            const estoques = await this.listarEstoquesUseCase.listar()
            return ok(estoques)
        } catch (error) {
            return serverError()
        }
    }
}