import swaggerConfig from '../docs'

import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'
import { noCache } from '../middlewares/no-cache'

export default (app: Express): void => {
  app.use('/swagger', noCache, serve, setup(swaggerConfig))
}