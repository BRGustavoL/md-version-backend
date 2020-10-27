import { Application, Request, Response } from 'express'
import { UserController } from '../controllers/userController'

export class UserRoutes {
  private userController: UserController = new UserController()

  public route(app: Application) {
    app.post('/create-user', (req: Request, res: Response) => {
      this.userController.createUser(req, res)
    })

    app.post('/find-user', (req: Request, res: Response) => {
      this.userController.getUser(req, res)
    })
  }
}
