import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { username, email, password, isAdmin } = req.body

      if (!username || !email || !password) {
        return res.status(400).json({
          message: "Invalid fields",
        })
      }

      const userCreated = await this.createUserUseCase.execute({
        username,
        email,
        password,
        isAdmin,
      })

      return res.status(201).json(userCreated)
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error",
      })
    }
  }
}
