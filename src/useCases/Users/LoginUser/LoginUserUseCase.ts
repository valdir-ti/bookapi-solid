import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { LoginUserRequestDTO } from "./LoginUserDTO";

export class LoginUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: LoginUserRequestDTO) {
    const user = await this.usersRepository.findOne(data.username);

    if (!user) throw new Error("User or Password are incorrect");

    const isCorrectPassword = bcrypt.compareSync(data.password, user.password);

    if (!isCorrectPassword) throw new Error("User or Password are incorrect");

    const secret = process.env.JWT_SECRET || "secretkey";

    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, secret);

    const userData = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    return { token, userData };
  }
}
