import { IUsersRepository } from "../../../repositories/implementations/IUsersRepository"

export class DeleteUserUseCase {
  constructor(private userRepository: IUsersRepository) {}
  async execute(id: string) {
    const deleted = await this.userRepository.delete(id)
    return deleted
  }
}
