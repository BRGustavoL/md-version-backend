import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import * as cors from 'cors'
import environments from '../environment'
import { UserRoutes } from '../routes/userRoutes'

class App {
  public app: express.Application
  public mongoUrl: String = 'mongodb://localhost:27017/' + environments.getDBName()

  private userRoutes: UserRoutes = new UserRoutes()

  constructor () {
    this.app = express()
    this.config()
    this.mongoSetup()
    this.userRoutes.route(this.app)
  }

  private config(): void {
    this.app.use(cors())
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
