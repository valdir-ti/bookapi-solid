import { IRoomRepository } from "../../../repositories/implementations/IRoomRepository"

export class ListRoomsUseCase {
  constructor(private roomRepository: IRoomRepository) {}
  execute() {
    const rooms = this.roomRepository.find()
    return rooms
  }
}
