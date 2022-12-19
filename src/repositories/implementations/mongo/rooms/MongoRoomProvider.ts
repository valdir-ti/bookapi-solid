import { Room } from "../../../../entities/Room"
import { IRoomRepository } from "../../IRoomRepository"
import MongoRoomModel from "./MongoRoomModel"

export class MongoRoomProvider implements IRoomRepository {
  async findById(id: string): Promise<Room> {
    throw new Error("Method not implemented.")
  }
  async save(hotelId: string, room: Room): Promise<Room> {
    const newU = { ...room, id: room.id }

    const newRoom = new MongoRoomModel(newU)

    const savedRoom = await newRoom.save()

    const { $__, $isNew, ...rest } = savedRoom
    const { _id, __v, createdAt, updatedAt, ...others } = rest._doc

    return others
  }
}
