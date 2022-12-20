import { User } from "../../../entities/User"
import { ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { GetUserUseCase } from "./GetUserUseCase"

export class GetUserController implements IController {
  constructor(private getUserUseCase: GetUserUseCase) {}
  async handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<User>> {
    try {
      const user = await this.getUserUseCase.execute(httpRequest.params.id)
      return ok<User>(user)
    } catch (error) {
      serverError()
    }
  }
}
