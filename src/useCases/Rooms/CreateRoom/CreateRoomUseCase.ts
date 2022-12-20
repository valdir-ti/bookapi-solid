import { Room } from "../../../entities/Room"
import { IHotelsRepository } from "../../../repositories/implementations/IHotelRepository"
import { IRoomRepository } from "../../../repositories/implementations/IRoomRepository"
import { CreateRoomRequestDTO } from "./CreateRoomRequestDTO"

export class CreateRoomUseCase {
  constructor(
    private roomRepository: IRoomRepository,
    private hotelRepository: IHotelsRepository,
  ) {}

  async execute(hotelId: string, data: CreateRoomRequestDTO) {
    const newRoom = new Room(data)

    const roomSaved = await this.roomRepository.save(hotelId, newRoom)

    await this.hotelRepository.findOneAndUpdate(hotelId, roomSaved.id)

    return roomSaved
  }
}
