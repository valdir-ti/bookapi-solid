import { MongoHotelProvider } from "../../../repositories/implementations/mongo/hotels/MongoHotelProvider"
import { ListHotelsController } from "./ListHotelsController"
import { ListHotelsUseCase } from "./ListHotelsUseCase"

const mongoHotelProvider = new MongoHotelProvider()

const listHotelsUseCase = new ListHotelsUseCase(mongoHotelProvider)

const listHotelsController = new ListHotelsController(listHotelsUseCase)

export { listHotelsController, listHotelsUseCase }
