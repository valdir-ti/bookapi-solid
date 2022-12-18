import { MongoHotelProvider } from "../../../repositories/implementations/mongo/hotels/MongoHotelProvider"
import { CreateHotelController } from "./CreateHotelController"
import { CreateHotelUseCase } from "./CreateHotelUseCase"

const mongoHotelProvider = new MongoHotelProvider()

const createHotelUseCase = new CreateHotelUseCase(mongoHotelProvider)

const createHotelController = new CreateHotelController(createHotelUseCase)

export { createHotelController, createHotelUseCase }
