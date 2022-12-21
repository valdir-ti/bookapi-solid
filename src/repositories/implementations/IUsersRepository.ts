import { User } from "../../entities/User"

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>

  findByUserName(username: string): Promise<User>

  findOne(username: string): Promise<User>

  find(): Promise<User[]>

  findById(id: string): Promise<User>

  delete(id: string): Promise<unknown>

  save(user: User): Promise<User>
}
