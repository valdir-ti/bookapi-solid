import { MongoHotelProvider } from "../../../repositories/implementations/mongo/hotels/MongoHotelProvider"
import { UpdateHotelController } from "./UpdateHotelController"
import { UpdateHotelUseCase } from "./UpdateHotelUseCase"

const mongoHotelProvider = new MongoHotelProvider()

const updateHotelUseCase = new UpdateHotelUseCase(mongoHotelProvider)

const updateHotelController = new UpdateHotelController(updateHotelUseCase)

export { updateHotelController, updateHotelUseCase }
