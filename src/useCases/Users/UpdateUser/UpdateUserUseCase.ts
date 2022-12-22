import { IUsersRepository } from "../../../repositories/implementations/IUsersRepository"
import { badRequest } from "../../helpers"
import { UpdateUserRequestDTO } from "./UpdateUserRequestDTO"

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string, user: UpdateUserRequestDTO) {
    const usernameAlreadyExists = await this.usersRepository.findByUserName(
      user.username,
    )

    if (usernameAlreadyExists) {
      return badRequest("Username or email already in use")
    }

    const updated = await this.usersRepository.update(id, user)
    return updated
  }
}
