export const deletarEstoquePath = {
    delete: {
        tags: ['Estoque'],
        summary: 'API para deletar um estoque',
        parameters: [{
            in: 'path',
            name: 'id',
            description: 'ID do estoque',
            required: true,
            schema: {
                type: 'integer'
            }
        }],
        responses: {
            200: {
                description: 'Estoque deletado'
            }
        }
    }
}