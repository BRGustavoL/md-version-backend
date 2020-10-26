import { ModificationNote } from '../common/model'

export interface IUser {
  _id?: String,
  username: String,
  email: String,
  password: String,
  modificationNotes: ModificationNote[]
}
