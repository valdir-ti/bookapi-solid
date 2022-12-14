import MongoUsersUser from "./MongoUsersModel"
import { User } from "../../../../entities/User"
import { IUsersRepository } from "../../../IUsersRepository"
import bcrypt from "bcryptjs"

export class MongoUsersProvider implements IUsersRepository {
  async findOne(username: string): Promise<any> {
    const user = await MongoUsersUser.findOne({ username })

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string): Promise<any> {
    const user = await MongoUsersUser.find({ email })

    if (user.length === 0) {
      return null
    }

    return user
  }

  async findByUserName(username: string): Promise<any> {
    const user = await MongoUsersUser.find({ username })

    if (user.length === 0) {
      return null
    }

    return user
  }

  async save(user: User): Promise<void> {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password, salt)

    const newU = { ...user, id: user.id, password: hash }

    const newUser: any = new MongoUsersUser(newU)

    await newUser.save()
  }
}
