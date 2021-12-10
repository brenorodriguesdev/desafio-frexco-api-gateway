export const listarEstoquesPath = {
    get: {
        tags: ['Estoque'],
        summary: 'API para retornar estoques',
        responses: {
            200: {
                description: 'Estoques retornados'
            }
        }
    }
}