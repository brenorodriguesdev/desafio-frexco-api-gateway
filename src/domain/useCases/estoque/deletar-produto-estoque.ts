import { AdicionarProdutoEstoqueModel } from "../../models/produto/adicionar-produto-estoque";

export interface DeletarProdutoEstoqueUseCase {
    deletar: (data: AdicionarProdutoEstoqueModel) => Promise<void | Error>
}