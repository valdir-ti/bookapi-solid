import { MongoHotelProvider } from "../../../repositories/implementations/mongo/hotels/MongoHotelProvider"
import { DeleteHotelController } from "./DeleteHotelController"
import { DeleteHotelUseCase } from "./DeleteHotelUseCase"

const mongoHotelProvider = new MongoHotelProvider()

const deleteHotelUseCase = new DeleteHotelUseCase(mongoHotelProvider)

const deleteHotelController = new DeleteHotelController(deleteHotelUseCase)

export { deleteHotelController, deleteHotelUseCase }
