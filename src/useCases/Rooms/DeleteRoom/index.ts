import { MongoRoomProvider } from "../../../repositories/implementations/mongo/rooms/MongoRoomProvider"
import { DeleteRoomController } from "./DeleteRoomController"
import { DeleteRoomUseCase } from "./DeleteRoomUseCase"

const mongoRoomProvider = new MongoRoomProvider()

const deleteRoomUseCase = new DeleteRoomUseCase(mongoRoomProvider)

const deleteRoomController = new DeleteRoomController(deleteRoomUseCase)

export { deleteRoomController, deleteRoomUseCase }
