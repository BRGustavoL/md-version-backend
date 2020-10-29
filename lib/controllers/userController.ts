import { Request, Response } from 'express'
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service'
import { IUser } from '../modules/users/model'
import UserService from '../modules/users/service'
import e = require('express')

export class UserController {
  private userService: UserService = new UserService()

  public createUser(req: Request, res: Response) {
    if (req.body.username && req.body.email && req.body.passwordMD2 && req.body.passwordMD4 && req.body.passwordMD5) {
      const userParams: IUser = {
        username: req.body.username,
        email: req.body.email,
        passwordMD2: req.body.passwordMD2,
        passwordMD4: req.body.passwordMD4,
        passwordMD5: req.body.passwordMD5,
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
    if (req.body.username && req.body.passwordMD2 && req.body.passwordMD4 && req.body.passwordMD5) {
      const userFilter = {
        username: req.body.username,
        passwordMD2: req.body.passwordMD2,
        passwordMD4: req.body.passwordMD4,
        passwordMD5: req.body.passwordMD5
      }
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
