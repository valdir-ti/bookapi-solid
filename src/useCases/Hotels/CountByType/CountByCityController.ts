import { ok, serverError } from "../../helpers"
import { HttpResponse, IController } from "../../protocols"
import { CountByTypeUseCase } from "./CountByTypeUseCase"

export class CountByTypeController implements IController {
  constructor(private countByTypeUseCase: CountByTypeUseCase) {}

  async handle(): Promise<HttpResponse<unknown>> {
    try {
      const result = await this.countByTypeUseCase.execute()

      return ok<unknown>(result)
    } catch (error) {
      serverError()
    }
  }
}
