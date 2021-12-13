export const deletarProdutoEstoquePath = {
    delete: {
        tags: ['ProdutoEstoque'],
        summary: 'API para deletar um produto do estoque',
        parameters: [{
            in: 'path',
            name: 'idProduto',
            description: 'ID do produto',
            required: true,
            schema: {
                type: 'integer'
            }
        }, {
            in: 'path',
            name: 'idEstoque',
            description: 'ID do estoque',
            required: true,
            schema: {
                type: 'integer'
            }
        }],
        responses: {
            204: {
                description: 'Produto do estoque deletado'
            }
        }
    }
}