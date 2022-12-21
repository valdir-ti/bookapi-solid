import { IHotelsRepository } from "../../../repositories/implementations/IHotelRepository"

export class GetHotelUseCase {
  constructor(private hotelRepository: IHotelsRepository) {}
  async execute(id: string) {
    const hotel = await this.hotelRepository.findById(id)
    return hotel
  }
}
