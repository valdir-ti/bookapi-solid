import { badRequest, ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { DeleteHotelUseCase } from "./DeleteHotelUseCase"

export class DeleteHotelController implements IController {
  constructor(private deleteHotelUseCase: DeleteHotelUseCase) {}
  async handle(
    httpRequest: HttpRequest<unknown>,
  ): Promise<HttpResponse<unknown>> {
    try {
      const deleted = await this.deleteHotelUseCase.execute(
        httpRequest.params.id,
      )

      if (!deleted) {
        return badRequest("fail to delete the hotel")
      }

      return ok<unknown>(deleted)
    } catch (error) {
      serverError()
    }
  }
}
