export const adicionarProdutoEstoquePath = {
    post: {
        tags: ['ProdutoEstoque'],
        summary: 'API para criar estoque',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/adicionarProdutoEstoqueParams'
                    }
                }
            }
        },
        responses: {
            201: {
                description: 'Adicionado produto ao estoque'
            }
        }
    }
}