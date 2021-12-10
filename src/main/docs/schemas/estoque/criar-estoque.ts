export const criarEstoqueParamsSchema = {
    type: 'object',
    properties: {
        nome: {
            type: 'string'
        }
    },
    required: ['nome']
}