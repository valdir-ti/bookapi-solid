import { User } from "../../../entities/User"
import { badRequest, ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { UpdateUserRequestDTO } from "./UpdateUserRequestDTO"
import { UpdateUserUseCase } from "./UpdateUserUseCase"

export class UpdateUserController implements IController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(
    httpRequest: HttpRequest<UpdateUserRequestDTO>,
  ): Promise<HttpResponse<User | string>> {
    try {
      if (httpRequest.body.email) {
        return badRequest("You cannot update the email")
      }

      const updated = await this.updateUserUseCase.execute(
        httpRequest.params.id,
        httpRequest.body,
      )

      if (!updated) {
        return badRequest("fail to update user")
      }

      return ok<User>(updated)
    } catch (error) {
      serverError()
    }
  }
}
