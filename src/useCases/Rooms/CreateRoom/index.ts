import { MongoRoomProvider } from "../../../repositories/implementations/mongo/rooms/MongoRoomProvider"
import { CreateRoomController } from "./CreateRoomController"
import { CreateRoomUseCase } from "./CreateRoomUseCase"

const mongoRoomProvider = new MongoRoomProvider()

const createRoomUseCase = new CreateRoomUseCase(mongoRoomProvider)

const createRoomController = new CreateRoomController(createRoomUseCase)

export { createRoomController, createRoomUseCase }
