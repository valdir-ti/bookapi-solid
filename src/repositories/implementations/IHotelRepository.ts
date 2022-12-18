import { Hotel } from "../../entities/Hotel"

export interface IHotelsRepository {
  findById(id: string): Promise<Hotel>

  save(hotel: Hotel): Promise<Hotel>
}
