import { Request, Response } from 'express'
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service'
import { IUser } from '../modules/users/model'
import UserService from '../modules/users/service'
import e = require('express')

export class UserController {
  private userService: UserService = new UserService()

  public createUser(req: Request, res: Response) {
    if (req && req.body && req.body.username && req.body.email && req.body.password) {
      const userParams: IUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        modificationNotes: [{
          modifiedOn: new Date(Date.now()),
          modifiedBy: null,
          modificationNote: 'Novo usuário criado'
        }]
      }
      this.userService.createUser(userParams, (err: any, userData: IUser) => {
        if (err) {
          mongoError(err, res)
        } else {
          successResponse('Usuário criado com sucesso', userData, res)
        }
      })
    } else {
      insufficientParameters(res)
    }
  }

  public getUser(req: Request, res: Response) {
    if (req && req.body.username && req.body.password) {
      const userFilter = { username: req.body.username, password: req.body.password }
      this.userService.filterUser(userFilter, (err: any, userData: IUser) => {
        if (err) {
          mongoError(err, res)
        } else {
          successResponse('Busca por usuário realizada com sucesso!', userData, res)
        }
      })
    } else {
      insufficientParameters(res)
    }
  }
}
