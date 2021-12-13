export const adicionarProdutoEstoqueParamsSchema = {
    type: 'object',
    properties: {
        idProduto: {
            type: 'integer'
        },
        idEstoque: {
            type: 'integer'
        }
    },
    required: ['idProduto', 'idEstoque']
}