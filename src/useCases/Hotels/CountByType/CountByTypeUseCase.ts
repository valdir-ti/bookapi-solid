import { IHotelsRepository } from "../../../repositories/implementations/IHotelRepository"

export class CountByTypeUseCase {
  constructor(private hotelProvider: IHotelsRepository) {}
  async execute() {
    const result = await this.hotelProvider.countByType()
    return result
  }
}
