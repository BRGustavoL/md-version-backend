import { Response } from 'express'
import { responseStatusCodes } from './model'

export const successResponse = (message: String, DATA: any, res: Response) => {
  res.status(responseStatusCodes.success).json({
    STATUS: 'SUCCESS',
    MESSAGE: message,
    DATA
  })
}

export const failureResponse = (message: String, DATA: any, res: Response) => {
  res.status(responseStatusCodes.success).json({
    STATUS: 'FAILURE',
    MESSAGE: message,
    DATA
  })
}

export const insufficientParameters = (res: Response) => {
  res.status(responseStatusCodes.badRequest).json({
    STATUS: 'FAILURE',
    MESSAGE: 'Parâmetros insuficientes',
    DATA: {}
  })
}

export const mongoError = (err: any, res: Response) => {
  res.status(responseStatusCodes.internalServerError).json({
    STATUS: 'FAILURE',
    MESSAGE: 'MongoDB error',
    DATA: err
  })
}
