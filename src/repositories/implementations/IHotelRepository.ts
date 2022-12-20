import { Hotel } from "../../entities/Hotel"

export interface IHotelsRepository {
  findById(id: string): Promise<Hotel>

  findOneAndUpdate(hotelId: string, roomSavedId: string): Promise<unknown>

  find(): Promise<Hotel[]>

  save(hotel: Hotel): Promise<Hotel>
}
