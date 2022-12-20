import { IHotelsRepository } from "../../../repositories/implementations/IHotelRepository"

export class ListHotelsUseCase {
  constructor(private hotelsRepository: IHotelsRepository) {}
  execute() {
    const hotels = this.hotelsRepository.find()
    return hotels
  }
}
