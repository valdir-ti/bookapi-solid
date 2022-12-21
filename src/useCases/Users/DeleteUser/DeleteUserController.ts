import { badRequest, ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { DeleteUserUseCase } from "./DeleteUserUseCase"

export class DeleteUserController implements IController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(
    httpRequest: HttpRequest<unknown>,
  ): Promise<HttpResponse<unknown>> {
    try {
      const deleted = await this.deleteUserUseCase.execute(
        httpRequest.params.id,
      )

      if (!deleted) {
        return badRequest("fail to delete user")
      }

      return ok<unknown>(deleted)
    } catch (error) {
      return serverError()
    }
  }
}
