import { MongoHotelProvider } from "../../../repositories/implementations/mongo/hotels/MongoHotelProvider"
import { GetHotelController } from "./GetHotelController"
import { GetHotelUseCase } from "./GetHotelUseCase"

const mongoHotelProvider = new MongoHotelProvider()

const getHotelUseCase = new GetHotelUseCase(mongoHotelProvider)

const getHotelController = new GetHotelController(getHotelUseCase)

export { getHotelUseCase, getHotelController }
