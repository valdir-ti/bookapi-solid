import { MongoUsersProvider } from "../../../repositories/implementations/mongo/users/MongoUsersProvider"
import { UpdateUserController } from "./UpdateUserController"
import { UpdateUserUseCase } from "./UpdateUserUseCase"

const mongoUserProvider = new MongoUsersProvider()

const updateUserUseCase = new UpdateUserUseCase(mongoUserProvider)

const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController, updateUserUseCase }
