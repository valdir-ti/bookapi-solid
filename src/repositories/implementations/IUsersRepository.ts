import { User } from "../../entities/User"
import { UpdateUserRequestDTO } from "../../useCases/Users/UpdateUser/UpdateUserRequestDTO"

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>

  findByUserName(username: string): Promise<User>

  findOne(username: string): Promise<User>

  find(): Promise<User[]>

  findById(id: string): Promise<User>

  delete(id: string): Promise<unknown>

  save(user: User): Promise<User>

  update(id: string, user: UpdateUserRequestDTO): Promise<User>
}
