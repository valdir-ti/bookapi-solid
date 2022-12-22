import { Hotel } from "../../../entities/Hotel"
import { badRequest, ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { UpdateHotelUseCase } from "./UpdateHotelUseCase"

export class UpdateHotelController implements IController {
  constructor(private updateHotelUseCase: UpdateHotelUseCase) {}

  async handle(
    httpRequest: HttpRequest<Hotel>,
  ): Promise<HttpResponse<Hotel | string>> {
    try {
      const updated = await this.updateHotelUseCase.execute(
        httpRequest.params.id,
        httpRequest.body,
      )

      if (!updated) {
        return badRequest("fail to update hotel")
      }

      return ok<Hotel>(updated)
    } catch (error) {
      serverError()
    }
  }
}
