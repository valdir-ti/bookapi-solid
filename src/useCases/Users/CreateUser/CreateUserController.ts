import { User } from "../../../entities/User"
import { badRequest, created, serverError } from "../../helpers"
import { HttpRequest, HttpResponse } from "../../protocols"
import { CreateUserRequestDTO } from "./CreateUserDTO"
import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(
    httpRequest: HttpRequest<CreateUserRequestDTO>,
  ): Promise<HttpResponse<User | string>> {
    try {
      const requiredFields = ["username", "email", "password"]

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field]?.length) {
          return badRequest(`Field ${field} is required`)
        }
      }

      const userCreated = await this.createUserUseCase.execute(httpRequest.body)

      return userCreated
    } catch (err) {
      serverError()
    }
  }
}
