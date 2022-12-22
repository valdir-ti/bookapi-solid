import { Hotel } from "../../../entities/Hotel"
import { IHotelsRepository } from "../../../repositories/implementations/IHotelRepository"

export class UpdateHotelUseCase {
  constructor(private hotelRepository: IHotelsRepository) {}
  async execute(id: string, hotel: Hotel) {
    const updated = await this.hotelRepository.update(id, hotel)
    return updated
  }
}
