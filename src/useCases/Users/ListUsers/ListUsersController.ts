import { User } from "../../../entities/User"
import { ok, serverError } from "../../helpers"
import { HttpResponse, IController } from "../../protocols"
import { ListUsersUseCase } from "./ListUsersUseCase"

export class ListUsersController implements IController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}
  async handle(): Promise<HttpResponse<User[]>> {
    try {
      const users = await this.listUsersUseCase.execute()
      return ok<User[]>(users)
    } catch (error) {
      serverError()
    }
  }
}
