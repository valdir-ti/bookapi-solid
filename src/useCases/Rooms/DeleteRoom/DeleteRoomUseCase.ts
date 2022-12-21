import { IRoomRepository } from "../../../repositories/implementations/IRoomRepository"

export class DeleteRoomUseCase {
  constructor(private roomRepository: IRoomRepository) {}
  async execute(id: string) {
    const deleted = this.roomRepository.delete(id)
    return deleted
  }
}
