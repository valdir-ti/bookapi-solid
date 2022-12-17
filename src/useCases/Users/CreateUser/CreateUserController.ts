import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { username, email, password, isAdmin, name, cpf } = req.body

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Invalid fields",
      })
    }

    try {
      const user = await this.createUserUseCase.execute({
        username,
        email,
        password,
        isAdmin,
        cpf,
        name,
      })
      return res.status(201).send({
        message: "User created successfully",
        user,
      })
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error",
      })
    }
  }
}
