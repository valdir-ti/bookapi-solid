import MongoHotelModel from "./MongoHotelModel"
import { IHotelsRepository } from "../../IHotelRepository"
import { Hotel } from "../../../../entities/Hotel"

export class MongoHotelProvider implements IHotelsRepository {
  async findOneAndUpdate(
    hotelId: string,
    savedRoomId: string,
  ): Promise<unknown> {
    const hotelFounded = await MongoHotelModel.findOne({ id: hotelId })

    await hotelFounded.updateOne({
      $push: { rooms: savedRoomId },
    })

    return
  }

  async findById(id: string): Promise<Hotel> {
    throw new Error("Method not implemented.")
  }

  async save(hotel: Hotel): Promise<Hotel> {
    const newU = { ...hotel, id: hotel.id }

    const newHotel = new MongoHotelModel(newU)

    const savedHotel = await newHotel.save()

    const { $__, $isNew, ...rest } = savedHotel
    const { _id, __v, createdAt, updatedAt, ...others } = rest._doc

    return others
  }
}
