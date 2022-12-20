import MongoUsersModel from "./MongoUsersModel"
import { User } from "../../../../entities/User"
import { IUsersRepository } from "../../IUsersRepository"
import bcrypt from "bcryptjs"

export class MongoUsersProvider implements IUsersRepository {
  async findOne(username: string): Promise<User> {
    const user = await MongoUsersModel.findOne({ username })

    if (!user) {
      return null
    }

    const { $__, $isNew, ...rest } = user
    const { _id, __v, createdAt, updatedAt, ...others } = rest._doc

    return others
  }

  async findByEmail(email: string): Promise<any> {
    const user = await MongoUsersModel.find({ email })

    if (user.length === 0) {
      return null
    }

    return user
  }

  async findByUserName(username: string): Promise<any> {
    const user = await MongoUsersModel.find({ username })

    if (user.length === 0) {
      return null
    }

    return user
  }

  async save(user: User): Promise<User> {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password, salt)

    const newU = { ...user, id: user.id, password: hash }

    const newUser: any = new MongoUsersModel(newU)

    const userCreated = await newUser.save()

    const {
      __v,
      $__,
      $errors,
      $isNew,
      _id,
      createdAt,
      updatedAt,
      password,
      ...rest
    } = userCreated._doc

    return rest
  }
}
