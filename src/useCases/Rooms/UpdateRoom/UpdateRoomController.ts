import { Room } from "../../../entities/Room"
import { badRequest, ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { UpdateRoomUseCase } from "./UpdateRoomUseCase"

export class UpdateRoomController implements IController {
  constructor(private updateRoomUseCase: UpdateRoomUseCase) {}

  async handle(httpRequest: HttpRequest<Room>): Promise<HttpResponse<unknown>> {
    try {
      const updated = await this.updateRoomUseCase.execute(
        httpRequest.params.id,
        httpRequest.body,
      )

      if (!updated) {
        return badRequest("fail to update room")
      }

      return ok<unknown>(updated)
    } catch (error) {
      return serverError()
    }
  }
}
