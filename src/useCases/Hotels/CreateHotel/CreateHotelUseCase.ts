import { Hotel } from "../../../entities/Hotel"
import { IHotelsRepository } from "../../../repositories/implementations/IHotelRepository"
import { CreateHotelRequestDTO } from "./CreateHotelDTO"

export class CreateHotelUseCase {
  constructor(private hotelRepository: IHotelsRepository) {}

  async execute(data: CreateHotelRequestDTO) {
    const newHotel = new Hotel(data)

    const hotelSaved = await this.hotelRepository.save(newHotel)

    return hotelSaved
  }
}
