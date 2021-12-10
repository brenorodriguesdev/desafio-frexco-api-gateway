import { 
    atualizarProdutoPath, 
    criarProdutoPath, 
    deletarProdutoPath, 
    listarProdutosPath,
    atualizarEstoquePath,
    criarEstoquePath,
    deletarEstoquePath,
    listarEstoquesPath
} from "./paths/";

export default {
    '/atualizarProduto': atualizarProdutoPath,
    '/criarProduto': criarProdutoPath,
    '/deletarProduto/{id}': deletarProdutoPath,
    '/listarProdutos': listarProdutosPath,
    '/atualizarEstoque': atualizarEstoquePath,
    '/criarEstoque': criarEstoquePath,
    '/deletarEstoque/{id}': deletarEstoquePath,
    '/listarEstoques': listarEstoquesPath,
}