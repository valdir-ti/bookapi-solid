import { MongoRoomProvider } from "../../../repositories/implementations/mongo/rooms/MongoRoomProvider"
import { GetRoomController } from "./GetRoomController"
import { GetRoomUseCase } from "./GetRoomUseCase"

const mongoRoomProvider = new MongoRoomProvider()

const getRoomUseCase = new GetRoomUseCase(mongoRoomProvider)

const getRoomController = new GetRoomController(getRoomUseCase)

export { getRoomController, getRoomUseCase }
