import { MongoHotelProvider } from "../../../repositories/implementations/mongo/hotels/MongoHotelProvider"
import { CountByCityNameController } from "./CountByCityController"
import { CountByCityNameUseCase } from "./CountByCityNameUseCase"

const mongoHotelProvider = new MongoHotelProvider()

const countByCityNameUseCase = new CountByCityNameUseCase(mongoHotelProvider)

const countByCityNameController = new CountByCityNameController(
  countByCityNameUseCase,
)

export { countByCityNameController, countByCityNameUseCase }
