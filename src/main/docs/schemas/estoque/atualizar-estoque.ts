export const atualizarEstoqueParamsSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer'
        },
        nome: {
            type: 'string'
        }
    },
    required: ['id', 'nome']
}