import { Room } from "../../entities/Room"

export interface IRoomRepository {
  findById(id: string): Promise<Room>

  find(): Promise<Room[]>

  delete(id: string): Promise<unknown>

  save(hotelId: string, room: Room): Promise<Room>

  update(id: string, room: Room): Promise<Room>
}
