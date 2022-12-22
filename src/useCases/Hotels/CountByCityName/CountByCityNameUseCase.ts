import { IHotelsRepository } from "../../../repositories/implementations/IHotelRepository"

export class CountByCityNameUseCase {
  constructor(private hotelProvider: IHotelsRepository) {}
  async execute(cities: Array<string>) {
    const result = await this.hotelProvider.countByCityName(cities)
    return result
  }
}
