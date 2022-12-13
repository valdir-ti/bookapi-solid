import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    if(!username || !password) {
      return res.status(400).json({
        message: "Invalid fields",
      });
    }


    try {
      const { token, userData } = await this.loginUserUseCase.execute({
        username,
        password,
      });

      return res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(userData);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
