import { MongoUsersProvider } from "../../../repositories/implementations/users/mongo/MongoUsersProvider";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";

const mongoUsersProvider = new MongoUsersProvider();

const loginUserUseCase = new LoginUserUseCase(mongoUsersProvider);

const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserController, loginUserUseCase };
