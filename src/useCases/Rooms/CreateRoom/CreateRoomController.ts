import { Room } from "../../../entities/Room"
import { badRequest, created, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { CreateRoomUseCase } from "./CreateRoomUseCase"

export class CreateRoomController implements IController {
  constructor(private createRoomUseCase: CreateRoomUseCase) {}

  async handle(
    httpRequest: HttpRequest<Room>,
  ): Promise<HttpResponse<Room | string>> {
    try {
      const hotelId = httpRequest.params.hotelId

      const requiredFields = ["title", "price", "maxPeople"]

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field]) {
          return badRequest(`Field ${field} is required`)
        }
      }

      const createdRoom = await this.createRoomUseCase.execute(
        hotelId,
        httpRequest.body,
      )

      return created<Room>(createdRoom)
    } catch (error) {
      serverError()
    }
  }
}
