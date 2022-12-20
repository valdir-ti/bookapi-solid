import { Hotel } from "../../../entities/Hotel"
import { IHotelsRepository } from "../IHotelRepository"

class IHotelRepositoryInMemory implements IHotelsRepository {
  findById(id: string): Promise<Hotel> {
    throw new Error("Method not implemented.")
  }
  findOneAndUpdate(hotelId: string, roomSavedId: string): Promise<unknown> {
    throw new Error("Method not implemented.")
  }
  find(): Promise<Hotel[]> {
    throw new Error("Method not implemented.")
  }
  save(hotel: Hotel): Promise<Hotel> {
    throw new Error("Method not implemented.")
  }
}

export { IHotelRepositoryInMemory }
