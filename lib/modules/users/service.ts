import { IUser } from './model'
import users from './schema'

export default class UserService {
  public createUser(userParams: IUser, callback: any) {
    const _session = new users(userParams)
    _session.save(callback)
  }

  public filterUser(query: any, callback: any) {
    users.find(query, callback)
  }
}
