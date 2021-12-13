import { AdicionarProdutoEstoqueModel } from "../../models/produto/adicionar-produto-estoque";

export interface AdicionarProdutoEstoqueUseCase {
    adicionar: (data: AdicionarProdutoEstoqueModel) => Promise<void | Error>
}