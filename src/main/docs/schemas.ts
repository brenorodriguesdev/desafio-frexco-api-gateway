import {
    atualizarProdutoParamsSchema,
    criarProdutoParamsSchema,
    atualizarEstoqueParamsSchema,
    criarEstoqueParamsSchema,
    adicionarProdutoEstoqueParamsSchema
} from "./schemas/";

export default {
    atualizarProdutoParams: atualizarProdutoParamsSchema,
    criarProdutoParams: criarProdutoParamsSchema,
    atualizarEstoqueParams: atualizarEstoqueParamsSchema,
    criarEstoqueParams: criarEstoqueParamsSchema,
    adicionarProdutoEstoqueParams: adicionarProdutoEstoqueParamsSchema
}