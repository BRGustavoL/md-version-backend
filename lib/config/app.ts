import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import environments from '../environment'
import { TestRoutes } from '../routes/testRoutes'
import { CommonRoutes } from '../routes/commonRoutes'

class App {
  public app: express.Application
  private testRoutes: TestRoutes = new TestRoutes()

  constructor () {
    this.app = express()
    this.config()
    this.testRoutes.route(this.app)
  }

  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }
}

export default new App().app
