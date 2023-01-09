import { MongoHotelProvider } from "../../../repositories/implementations/mongo/hotels/MongoHotelProvider"
import { CountByTypeController } from "./CountByCityController"
import { CountByTypeUseCase } from "./CountByTypeUseCase"

const mongoHotelProvider = new MongoHotelProvider()

const countByTypeUseCase = new CountByTypeUseCase(mongoHotelProvider)

const countByTypeController = new CountByTypeController(countByTypeUseCase)

export { countByTypeController, countByTypeUseCase }
