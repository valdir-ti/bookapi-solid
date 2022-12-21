import { MongoUsersProvider } from "../../../repositories/implementations/mongo/users/MongoUsersProvider"
import { DeleteUserController } from "./DeleteUserController"
import { DeleteUserUseCase } from "./DeleteUserUseCase"

const mongoUsersProvider = new MongoUsersProvider()

const deleteUserUseCase = new DeleteUserUseCase(mongoUsersProvider)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController, deleteUserUseCase }
