import { badRequest, created, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { LoginUserUseCase } from "./LoginUserUseCase"
import {
  LoginUserRequestDTO,
  LoginUserResponseDTO,
} from "./LoginUserRequestDTO"

export class LoginUserController implements IController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(
    httpRequest: HttpRequest<LoginUserRequestDTO>,
  ): Promise<HttpResponse<any>> {
    try {
      const requiredFields = ["username", "password"]

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field]) {
          return badRequest(`Field ${field} is required`)
        }
      }

      const login = await this.loginUserUseCase.execute(httpRequest.body)

      return created<LoginUserResponseDTO>(login)
    } catch (err) {
      serverError()
    }
  }
}
