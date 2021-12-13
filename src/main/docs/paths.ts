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
    buscarProdutoPath,
    adicionarProdutoEstoquePath,
    deletarProdutoEstoquePath,
    buscarEstoquePath
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
    '/buscarEstoque/{id}': buscarEstoquePath,
    '/listarCategorias': listarCategoriasPath,
    '/adicionarProdutoEstoque': adicionarProdutoEstoquePath,
    '/deletarProdutoEstoque/{idProduto}/{idEstoque}': deletarProdutoEstoquePath,
}