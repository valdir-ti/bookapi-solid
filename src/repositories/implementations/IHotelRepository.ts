import { Hotel } from "../../entities/Hotel"

export interface IHotelsRepository {
  findById(id: string): Promise<Hotel>

  findOneAndUpdate(hotelId: string, roomSavedId: string): Promise<unknown>

  find(query: any): Promise<Hotel[]>

  delete(id: string): Promise<unknown>

  save(hotel: Hotel): Promise<Hotel>

  update(id: string, room: Hotel): Promise<Hotel>

  countByCityName(cities: Array<string>): Promise<Array<number>>

  countByType(): Promise<Array<object>>
}
