import { Room } from "../../../../entities/Room"
import { IRoomRepository } from "../../IRoomRepository"
import MongoHotelModel from "../hotels/MongoHotelModel"
import MongoRoomModel from "./MongoRoomModel"

export class MongoRoomProvider implements IRoomRepository {
  async update(id: string, room: Room): Promise<Room> {
    const foundRoom = await MongoRoomModel.findOne({ id })

    if (!foundRoom) {
      return null
    }

    const obj = {}
    for (const key in room) {
      obj[key] = room[key]
    }

    const updated = await MongoRoomModel.findOneAndUpdate({ id: id }, obj, {
      returnOriginal: false,
    })

    const { $__, $isNew, ...rest } = updated
    const { _id, __v, createdAt, updatedAt, ...others } = rest._doc

    return others
  }

  async delete(id: string): Promise<unknown> {
    const foundRoom = await MongoRoomModel.findOne({ id })

    if (!foundRoom) {
      return null
    }

    const deleted = await MongoRoomModel.deleteOne({ id })

    if (deleted.deletedCount > 0) {
      const hotelRoom = await MongoHotelModel.findOne({ rooms: id })

      const roomsFiltered = hotelRoom.rooms.filter(room => room !== id)

      await MongoHotelModel.updateOne({ rooms: roomsFiltered })
    }

    return deleted
  }

  async find(): Promise<Room[]> {
    const rooms = await MongoRoomModel.find()
    const roomsList = []

    rooms.map(room => {
      const { __v, $__, $errors, $isNew, _id, createdAt, updatedAt, ...rest } =
        room._doc

      roomsList.push(rest)
    })

    return roomsList
  }

  async findById(id: string): Promise<Room> {
    const room = await MongoRoomModel.findOne({ id })

    if (!room) {
      return null
    }

    const { $__, $isNew, ...rest } = room
    const { _id, __v, createdAt, updatedAt, ...others } = rest._doc

    return others
  }

  async save(hotelId: string, room: Room): Promise<Room> {
    const newU = { ...room, id: room.id }

    const hotelFounded = await MongoHotelModel.findOne({ id: hotelId })

    if (!hotelFounded) {
      return null
    }

    const newRoom = new MongoRoomModel(newU)

    const savedRoom = await newRoom.save()

    const { $__, $isNew, ...rest } = savedRoom
    const { _id, __v, createdAt, updatedAt, ...others } = rest._doc

    return others
  }
}
