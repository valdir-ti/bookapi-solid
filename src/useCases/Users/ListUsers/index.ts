import { MongoUsersProvider } from "../../../repositories/implementations/mongo/users/MongoUsersProvider"
import { ListUsersController } from "./ListUsersController"
import { ListUsersUseCase } from "./ListUsersUseCase"

const mongoUsersProvider = new MongoUsersProvider()

const listUsersUseCase = new ListUsersUseCase(mongoUsersProvider)

const listUsersController = new ListUsersController(listUsersUseCase)

export { listUsersController, listUsersUseCase }
