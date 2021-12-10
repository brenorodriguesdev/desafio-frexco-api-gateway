export const criarProdutoParamsSchema = {
    type: 'object',
    properties: {
        idCategoria: {
            type: 'integer'
        },
        nome: {
            type: 'string'
        }
    },
    required: ['id', 'idCategoria', 'nome']
}