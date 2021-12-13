import { EstoqueModel } from "../../../domain/models/estoque/estoque";
import { BuscarEstoqueUseCase } from "../../../domain/useCases/estoque/buscar-estoque";
import { AMQPClient } from "../../contracts/amqp-client";

export class BuscarEstoqueService implements BuscarEstoqueUseCase {
    constructor (private readonly amqpClient: AMQPClient) {}
    async buscar(id: number): Promise<EstoqueModel | Error> {
        const estoque = await this.amqpClient.send('buscar-estoque', { id })
        if (estoque && estoque['error']) {
            return new Error(estoque['error'])
        }
        return estoque
    }
}