export const criarEstoquePath = {
    post: {
        tags: ['Estoque'],
        summary: 'API para criar estoque',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/criarEstoqueParams'
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Estoque retornado'
            }
        }
    }
}