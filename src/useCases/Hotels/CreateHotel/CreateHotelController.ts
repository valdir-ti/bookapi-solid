import { Hotel } from "../../../entities/Hotel"
import { badRequest, created, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { CreateHotelRequestDTO } from "./CreateHotelDTO"
import { CreateHotelUseCase } from "./CreateHotelUseCase"

export class CreateHotelController implements IController {
  constructor(private createHotelUseCase: CreateHotelUseCase) {}

  async handle(
    httpRequest: HttpRequest<CreateHotelRequestDTO>,
  ): Promise<HttpResponse<Hotel | string>> {
    try {
      const requiredFields = ["name", "type", "city"]

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field]?.length) {
          return badRequest(`Field ${field} is required`)
        }
      }

      const createdHotel = await this.createHotelUseCase.execute(
        httpRequest.body,
      )

      return created<Hotel>(createdHotel)
    } catch (error) {
      serverError()
    }
  }
}
