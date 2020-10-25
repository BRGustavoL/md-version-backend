import { Application, Request, Response } from 'express'

export class TestRoutes {
  public route(app: Application) {
    app.get('/test', (req: Request, res: Response) => {
      res.status(200).json({ message: "Método GET funcionando!" })
    })

    app.post('/test', (req: Request, res: Response) => {
      res.status(200).json({ message: "Método POST funcionando!" })
    })
  }
}
