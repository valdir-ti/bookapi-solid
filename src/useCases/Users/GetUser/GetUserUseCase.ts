import { IUsersRepository } from "../../../repositories/implementations/IUsersRepository"

export class GetUserUseCase {
  constructor(private usesRepository: IUsersRepository) {}
  async execute(id: string) {
    const user = await this.usesRepository.findById(id)
    return user
  }
}
