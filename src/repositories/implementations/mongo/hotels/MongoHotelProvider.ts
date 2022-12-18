import MongoHotelModel from "./MongoHotelModel"
import { IHotelsRepository } from "../../IHotelRepository"
import { Hotel } from "../../../../entities/Hotel"

export class MongoHotelProvider implements IHotelsRepository {
  async findById(id: string): Promise<Hotel> {
    throw new Error("Method not implemented.")
  }
  async save(hotel: Hotel): Promise<Hotel> {
    const newU = { ...hotel, id: hotel.id }

    const newHotel = new MongoHotelModel(newU)

    const savedHotel = await newHotel.save()

    const { $__, $isNew, ...rest } = savedHotel
    const { _id, __v, password, isAdmin, createdAt, updatedAt, ...others } =
      rest._doc

    return others
  }
}
