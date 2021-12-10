import { CategoriaModel } from "../../../domain/models/produto/categoria";
import { ListarCategoriasUseCase } from "../../../domain/useCases/produto/listar-categorias";
import { AMQPClient } from "../../contracts/amqp-client";

export class ListarCategoriasService implements ListarCategoriasUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async listar(): Promise<CategoriaModel[]> {
        const categorias = await this.amqpClient.send('listar-categorias', {})
        return categorias
    }
}