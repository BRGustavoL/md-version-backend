import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import environments from '../environment'
import { TestRoutes } from '../routes/testRoutes'
import { CommonRoutes } from '../routes/commonRoutes'

class App {
  public app: express.Application
  public mongoUrl: String = 'mongodb://localhost/' + environments.getDBName()

  private testRoutes: TestRoutes = new TestRoutes()
  private commonRoutes: CommonRoutes = new CommonRoutes()

  constructor () {
    this.app = express()
    this.config()
    this.mongoSetup()
    this.testRoutes.route(this.app)
    this.commonRoutes.route(this.app)
  }

  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  }
}

export default new App().app
