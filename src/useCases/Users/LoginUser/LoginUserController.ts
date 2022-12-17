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
      const { username, password } = httpRequest.body

      if (!username || !password) {
        return badRequest("invalid fields")
      }

      const login = await this.loginUserUseCase.execute({
        username,
        password,
      })

      return created<LoginUserResponseDTO>(login)
    } catch (err) {
      serverError()
    }
  }
}
