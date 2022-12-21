import { Room } from "../../../entities/Room"
import { IRoomRepository } from "../../../repositories/implementations/IRoomRepository"

export class UpdateRoomUseCase {
  constructor(private roomRepository: IRoomRepository) {}
  async execute(id: string, room: Room) {
    const updated = await this.roomRepository.update(id, room)
    return updated
  }
}
