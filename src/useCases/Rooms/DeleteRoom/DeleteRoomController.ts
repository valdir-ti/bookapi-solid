import { badRequest, ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { DeleteRoomUseCase } from "./DeleteRoomUseCase"

export class DeleteRoomController implements IController {
  constructor(private deleteRoomUseCase: DeleteRoomUseCase) {}

  async handle(
    httpRequest: HttpRequest<unknown>,
  ): Promise<HttpResponse<unknown>> {
    try {
      const deleted = await this.deleteRoomUseCase.execute(
        httpRequest.params.id,
      )

      if (!deleted) {
        return badRequest("fail to delete the room")
      }

      return ok<unknown>(deleted)
    } catch (error) {
      serverError()
    }
  }
}
