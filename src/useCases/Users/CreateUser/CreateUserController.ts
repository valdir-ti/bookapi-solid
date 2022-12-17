import { User } from "../../../entities/User"
import { badRequest, created, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { CreateUserRequestDTO } from "./CreateUserDTO"
import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController implements IController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(
    httpRequest: HttpRequest<CreateUserRequestDTO>,
  ): Promise<HttpResponse<User | string>> {
    try {
      const requiredFields = ["username", "name", "email", "cpf", "password"]

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field]?.length) {
          return badRequest(`Field ${field} is required`)
        }
      }

      const createdUser = await this.createUserUseCase.execute(httpRequest.body)

      return created<User>(createdUser)
    } catch (err) {
      serverError()
    }
  }
}
