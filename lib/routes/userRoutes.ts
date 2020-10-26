import { Application, Request, Response } from 'express'
import { UserController } from '../controllers/userController'

export class UserRoutes {
  private userController: UserController = new UserController()

  public route(app: Application) {
    app.post('/user', (req: Request, res: Response) => {
      this.userController.createUser(req, res)
    })
  }
}