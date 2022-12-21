import { Hotel } from "../../../entities/Hotel"
import { ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { GetHotelUseCase } from "./GetHotelUseCase"

export class GetHotelController implements IController {
  constructor(private getHotelUseCase: GetHotelUseCase) {}
  async handle(
    httpRequest: HttpRequest<unknown>,
  ): Promise<HttpResponse<Hotel>> {
    try {
      const hotel = await this.getHotelUseCase.execute(httpRequest.params.id)
      return ok<Hotel>(hotel)
    } catch (error) {
      serverError()
    }
  }
}
