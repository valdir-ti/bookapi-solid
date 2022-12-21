import { IHotelsRepository } from "../../../repositories/implementations/IHotelRepository"

export class DeleteHotelUseCase {
  constructor(private hotelRepository: IHotelsRepository) {}
  execute(id: string) {
    const deleted = this.hotelRepository.delete(id)
    return deleted
  }
}
