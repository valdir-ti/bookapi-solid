import { MongoHotelProvider } from "../../../repositories/implementations/mongo/hotels/MongoHotelProvider"
import { MongoRoomProvider } from "../../../repositories/implementations/mongo/rooms/MongoRoomProvider"
import { CreateRoomController } from "./CreateRoomController"
import { CreateRoomUseCase } from "./CreateRoomUseCase"

const mongoRoomProvider = new MongoRoomProvider()
const mongoHotelProvider = new MongoHotelProvider()

const createRoomUseCase = new CreateRoomUseCase(
  mongoRoomProvider,
  mongoHotelProvider,
)

const createRoomController = new CreateRoomController(createRoomUseCase)

export { createRoomController, createRoomUseCase }
