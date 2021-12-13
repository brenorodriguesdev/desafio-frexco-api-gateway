export const listarProdutoEstoquePorEstoquePath = {
    get: {
        tags: ['ProdutoEstoque'],
        summary: 'API para listar produtos de um estoque',
        parameters: [{
            in: 'path',
            name: 'idEstoque',
            description: 'ID do estoque',
            required: true,
            schema: {
                type: 'integer'
            }
        }],
        responses: {
            200: {
                description: 'Produtos do estoque retornados'
            }
        }
    }
}