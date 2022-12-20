import { IRoomRepository } from "../../../repositories/implementations/IRoomRepository"

export class GetRoomUseCase {
  constructor(private roomRepository: IRoomRepository) {}
  async execute(id: string) {
    const room = await this.roomRepository.findById(id)
    return room
  }
}
