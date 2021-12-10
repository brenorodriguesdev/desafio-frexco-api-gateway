import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Desafio Frexco API',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Produto',
    description: 'APIs de Produto',
  },
  {
    name: 'Estiqye',
    description: 'APIs de Estoque',
  }],
  paths,
  schemas
}