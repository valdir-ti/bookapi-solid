import { User } from "../../../entities/User";
import { IMailProvider } from "../../../providers/IMailProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: CreateUserRequestDTO) {

    const usernameAlreadyExists = await this.usersRepository.findByUserName(
      data.username
    );

    if (usernameAlreadyExists) {
      throw new Error("Username or email already in use");
    }

    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("Username or email already in use");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.username,
        email: data.email,
      },
      from: {
        name: "Equipe Intratec Tecnologia",
        email: "intratec@gmail.com",
      },
      subject: "Seja bem vindo a plataforma",
      body: "<p>Você já pode acessar a nossa plataforma</p>",
    });
  }
}
