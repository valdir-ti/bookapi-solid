import { MongoRoomProvider } from "../../../repositories/implementations/mongo/rooms/MongoRoomProvider"
import { UpdateRoomController } from "./UpdateRoomController"
import { UpdateRoomUseCase } from "./UpdateRoomUseCase"

const mongoRoomProvider = new MongoRoomProvider()

const updateRoomUseCase = new UpdateRoomUseCase(mongoRoomProvider)

const updateRoomController = new UpdateRoomController(updateRoomUseCase)

export { updateRoomController, updateRoomUseCase }
