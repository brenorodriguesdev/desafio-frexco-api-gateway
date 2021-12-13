export const buscarEstoquePath = {
    get: {
        tags: ['Estoque'],
        summary: 'API para buscar um estoque',
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
                description: 'Estoque retornado'
            }
        }
    }
}