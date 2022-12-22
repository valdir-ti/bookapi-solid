import { ok, serverError } from "../../helpers"
import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { CountByCityNameUseCase } from "./CountByCityNameUseCase"

export class CountByCityNameController implements IController {
  constructor(private countByCityNameUseCase: CountByCityNameUseCase) {}

  async handle(
    httpRequest: HttpRequest<unknown>,
  ): Promise<HttpResponse<unknown>> {
    try {
      const cities = httpRequest.query.cities.split(",")

      const result = await this.countByCityNameUseCase.execute(cities)

      return ok<unknown>(result)
    } catch (error) {
      serverError()
    }
  }
}
