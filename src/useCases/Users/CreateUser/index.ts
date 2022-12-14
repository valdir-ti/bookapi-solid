import { MailtrapMailProvider } from "../../../providers/implementations/MailtrapMailProvider"
import { MongoUsersProvider } from "../../../repositories/implementations/users/mongo/MongoUsersProvider"
import { CreateUserController } from "./CreateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"

const mailtrapProvider = new MailtrapMailProvider()
const mongoUsersProvider = new MongoUsersProvider()

const createUserUseCase = new CreateUserUseCase(
  mongoUsersProvider,
  mailtrapProvider,
)

const createUsercontroller = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUsercontroller }
