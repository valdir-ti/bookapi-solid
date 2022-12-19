import { Room } from "../../entities/Room"

export interface IRoomRepository {
  findById(id: string): Promise<Room>

  save(hotelId: string, room: Room): Promise<Room>
}
