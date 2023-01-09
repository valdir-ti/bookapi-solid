import { IHotelsRepository } from "../../../repositories/implementations/IHotelRepository"

export class ListHotelsUseCase {
  constructor(private hotelsRepository: IHotelsRepository) {}
  execute(query: any) {
    const hotels = this.hotelsRepository.find(query)
    return hotels
  }
}
