import { IUsersRepository } from "../../../repositories/implementations/IUsersRepository"

export class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute() {
    const users = this.usersRepository.find()

    return users
  }
}
