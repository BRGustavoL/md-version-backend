import * as mongoose from 'mongoose'
import { ModificationNote } from '../common/model'

const Schema = mongoose.Schema

const schema = new Schema({
  username: String,
  email: String,
  passwordMD2: String,
  passwordMD4: String,
  passwordMD5: String,
  modificationNotes: [ModificationNote]
})

export default mongoose.model('users', schema)
