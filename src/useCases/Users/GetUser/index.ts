import { MongoUsersProvider } from "../../../repositories/implementations/mongo/users/MongoUsersProvider"
import { GetUserController } from "./GetUserController"
import { GetUserUseCase } from "./GetUserUseCase"

const mongoUsersProvider = new MongoUsersProvider()

const getUserUseCase = new GetUserUseCase(mongoUsersProvider)

const getUserController = new GetUserController(getUserUseCase)

export { getUserController, getUserUseCase }
