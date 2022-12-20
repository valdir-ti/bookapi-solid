import { MongoRoomProvider } from "../../../repositories/implementations/mongo/rooms/MongoRoomProvider"
import { ListRoomsController } from "./ListRoomsController"
import { ListRoomsUseCase } from "./ListRoomsUseCase"

const mongoRoomProvider = new MongoRoomProvider()

const listRoomsUseCase = new ListRoomsUseCase(mongoRoomProvider)

const listRoomsController = new ListRoomsController(listRoomsUseCase)

export { listRoomsController, listRoomsUseCase }
