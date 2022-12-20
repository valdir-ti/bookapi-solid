import { Room } from "../../../entities/Room"
import { ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { GetRoomUseCase } from "./GetRoomUseCase"

export class GetRoomController implements IController {
  constructor(private getRoomUseCase: GetRoomUseCase) {}

  async handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<Room>> {
    try {
      const room = await this.getRoomUseCase.execute(httpRequest.params.id)
      return ok<Room>(room)
    } catch (error) {
      serverError()
    }
  }
}
