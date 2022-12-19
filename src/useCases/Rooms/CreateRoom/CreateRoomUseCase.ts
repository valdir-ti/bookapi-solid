import { Room } from "../../../entities/Room"
import { IRoomRepository } from "../../../repositories/implementations/IRoomRepository"
import { CreateRoomRequestDTO } from "./CreateRoomRequestDTO"

export class CreateRoomUseCase {
  constructor(private roomRepository: IRoomRepository) {}

  async execute(hotelId: string, data: CreateRoomRequestDTO) {
    const newRoom = new Room(data)

    const roomSaved = await this.roomRepository.save(hotelId, newRoom)

    return roomSaved
  }
}
