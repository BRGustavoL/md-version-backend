import { ModificationNote } from '../common/model'

export interface IUser {
  _id?: String,
  username: String,
  email: String,
  passwordMD2: String,
  passwordMD4: String,
  passwordMD5: String,
  modificationNotes: ModificationNote[]
}
