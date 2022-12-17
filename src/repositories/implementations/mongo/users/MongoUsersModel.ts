import mongoose from "mongoose"
import { MongoResult } from "../IMongoResult"

const { Schema, model } = mongoose

interface IUser extends MongoResult {
  name: string
  cpf: string
  username: string
  email: string
  password: string
  isAdmin: boolean
  id: string
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    cpf: {
      type: String,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

export default model<IUser>("User", userSchema)
