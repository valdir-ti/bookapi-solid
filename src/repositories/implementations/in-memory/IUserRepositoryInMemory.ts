import { User } from "../../../entities/User"
import { IUsersRepository } from "../IUsersRepository"

class IUserRepositoryInMemory implements IUsersRepository {
  users: User[] = [
    {
      username: "any_username",
      email: "any_email",
      password: "any_password",
      isAdmin: false,
      id: "any_id",
    },
  ]

  async find(): Promise<User[]> {
    const users = this.users
    return users
  }
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)
    return user
  }

  async findByUserName(username: string): Promise<User> {
    const user = this.users.find(user => user.username === username)
    return user
  }

  async findOne(username: string): Promise<User> {
    const user = this.users.find(user => user.username === username)
    return user
  }

  async save(user: User): Promise<User> {
    const newUser = new User(user)
    this.users.push(newUser)
    return newUser
  }
}

export { IUserRepositoryInMemory }
