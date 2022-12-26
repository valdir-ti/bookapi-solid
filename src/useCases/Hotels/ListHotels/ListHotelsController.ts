import { Hotel } from "../../../entities/Hotel"
import { ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { ListHotelsUseCase } from "./ListHotelsUseCase"

export class ListHotelsController implements IController {
  constructor(private listHotelsUseCase: ListHotelsUseCase) {}

  async handle(
    httpRequest: HttpRequest<unknown>,
  ): Promise<HttpResponse<Hotel[]>> {
    try {
      const hotels = await this.listHotelsUseCase.execute(httpRequest)
      return ok<Hotel[]>(hotels)
    } catch (error) {
      serverError()
    }
  }
}
