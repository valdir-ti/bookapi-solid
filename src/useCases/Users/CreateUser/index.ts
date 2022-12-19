import { MailtrapMailProvider } from "../../../providers/implementations/MailtrapMailProvider"
import { MongoUsersProvider } from "../../../repositories/implementations/mongo/users/MongoUsersProvider"
import { CreateUserController } from "./CreateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"

const mongoUsersProvider = new MongoUsersProvider()
const mailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  mongoUsersProvider,
  mailProvider,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }
