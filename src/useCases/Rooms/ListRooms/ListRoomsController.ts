import { Room } from "../../../entities/Room"
import { ok, serverError } from "../../helpers"
import { HttpResponse, IController } from "../../protocols"
import { ListRoomsUseCase } from "./ListRoomsUseCase"

export class ListRoomsController implements IController {
  constructor(private listRoomsUseCase: ListRoomsUseCase) {}
  async handle(): Promise<HttpResponse<Room[]>> {
    try {
      const rooms = await this.listRoomsUseCase.execute()
      return ok<Room[]>(rooms)
    } catch (error) {
      serverError()
    }
  }
}
