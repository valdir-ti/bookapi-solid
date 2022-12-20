import { Hotel } from "../../../entities/Hotel"
import { ok, serverError } from "../../helpers"
import { HttpResponse, IController } from "../../protocols"
import { ListHotelsUseCase } from "./ListHotelsUseCase"

export class ListHotelsController implements IController {
  constructor(private listHotelsUseCase: ListHotelsUseCase) {}

  async handle(): Promise<HttpResponse<Hotel[]>> {
    try {
      const hotels = await this.listHotelsUseCase.execute()
      return ok<Hotel[]>(hotels)
    } catch (error) {
      serverError()
    }
  }
}
