import { ListarCategoriasUseCase } from "../../../domain/useCases/produto/listar-categorias";
import { Controller } from "../../contracts/controller";
import { HttpResponse } from "../../contracts/http";
import { ok, serverError } from "../../contracts/http-helper";

export class ListarCategoriasController implements Controller {
    constructor (private readonly listarCategoriasUseCase: ListarCategoriasUseCase) {}
    async handle(): Promise<HttpResponse> {
        try {
            const categorias = await this.listarCategoriasUseCase.listar()
            return ok(categorias)
        } catch (error) {
            return serverError()
        }
    }
}