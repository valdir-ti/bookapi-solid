import { IHotelsRepository } from "../../../repositories/implementations/IHotelRepository"

export class DeleteHotelUseCase {
  constructor(private hotelRepository: IHotelsRepository) {}
  async execute(id: string) {
    const deleted = await this.hotelRepository.delete(id)

    return deleted
  }
}
