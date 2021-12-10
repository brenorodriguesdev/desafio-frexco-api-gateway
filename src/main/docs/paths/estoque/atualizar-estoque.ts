export const atualizarEstoquePath = {
    put: {
        tags: ['Estoque'],
        summary: 'API para atualizar estoque',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/atualizarEstoqueParams'
                    }
                }
            }
        },
        responses: {
            204: {
                description: 'Estoque alterado'
            }
        }
    }
}