export const atualizarProdutoParamsSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer'
        },
        idCategoria: {
            type: 'integer'
        },
        nome: {
            type: 'string'
        }
    },
    required: ['id', 'idCategoria', 'nome']
}