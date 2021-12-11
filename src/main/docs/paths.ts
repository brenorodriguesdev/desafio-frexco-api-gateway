import { 
    atualizarProdutoPath, 
    criarProdutoPath, 
    deletarProdutoPath, 
    listarProdutosPath,
    atualizarEstoquePath,
    criarEstoquePath,
    deletarEstoquePath,
    listarEstoquesPath,
    listarCategoriasPath,
    buscarProdutoPath
} from "./paths/";

export default {
    '/atualizarProduto': atualizarProdutoPath,
    '/criarProduto': criarProdutoPath,
    '/deletarProduto/{id}': deletarProdutoPath,
    '/listarProdutos': listarProdutosPath,
    '/buscarProduto/{id}': buscarProdutoPath,
    '/atualizarEstoque': atualizarEstoquePath,
    '/criarEstoque': criarEstoquePath,
    '/deletarEstoque/{id}': deletarEstoquePath,
    '/listarEstoques': listarEstoquesPath,
    '/listarCategorias': listarCategoriasPath,
}