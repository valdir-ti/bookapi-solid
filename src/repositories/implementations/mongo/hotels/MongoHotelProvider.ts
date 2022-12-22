import MongoHotelModel from "./MongoHotelModel"
import { IHotelsRepository } from "../../IHotelRepository"
import { Hotel } from "../../../../entities/Hotel"
import MongoRoomModel from "../rooms/MongoRoomModel"

export class MongoHotelProvider implements IHotelsRepository {
  async countByCityName(cities: Array<string>): Promise<Array<number>> {
    if (!cities) {
      return null
    }

    const list = Promise.all(
      cities.map(city => {
        return MongoHotelModel.countDocuments({ city })
      }),
    )

    return list
  }

  async countByType(type: string): Promise<number> {
    throw new Error("Method not implemented.")
  }

  async delete(id: string): Promise<unknown> {
    const hotelFounded = await MongoHotelModel.findOne({ id })

    if (!hotelFounded) {
      return null
    }

    if (hotelFounded.rooms.length > 0) {
      hotelFounded.rooms.forEach(async room => {
        await MongoRoomModel.deleteOne({ id: room })
      })
    }

    const deleted = await hotelFounded.deleteOne({ id })

    return deleted
  }

  async find(): Promise<Hotel[]> {
    const hotels = await MongoHotelModel.find()
    const hotelsList = []

    hotels.map(hotel => {
      const { __v, $__, $errors, $isNew, _id, createdAt, updatedAt, ...rest } =
        hotel._doc

      hotelsList.push(rest)
    })

    return hotelsList
  }

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
    const hotel = await MongoHotelModel.findOne({ id })

    if (!hotel) {
      return null
    }

    const { $__, $isNew, ...rest } = hotel
    const { _id, __v, createdAt, updatedAt, ...others } = rest._doc

    return others
  }

  async update(id: string, hotel: Hotel): Promise<Hotel> {
    const foundHotel = await MongoHotelModel.findOne({ id })

    if (!foundHotel) {
      return null
    }

    const obj = {}
    for (const key in hotel) {
      obj[key] = hotel[key]
    }

    const updated = await MongoHotelModel.findOneAndUpdate({ id: id }, obj, {
      returnOriginal: false,
    })

    const { $__, $isNew, ...rest } = updated
    const { _id, __v, createdAt, updatedAt, ...others } = rest._doc

    return others
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
