import { Room } from "../../../entities/Room"
import { IRoomRepository } from "../IRoomRepository"

class IRoomRepositoryInMemory implements IRoomRepository {
  findById(id: string): Promise<Room> {
    throw new Error("Method not implemented.")
  }
  save(hotelId: string, room: Room): Promise<Room> {
    throw new Error("Method not implemented.")
  }
}

export { IRoomRepositoryInMemory }
