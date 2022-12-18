import { Router } from "express"
import { loginUserController } from "../useCases/Users/LoginUser"

const authRouter = Router()

authRouter.post("/login", async (req, res) => {
  const { body, statusCode } = await loginUserController.handle(req)

  if (body.statusCode === 400) {
    return res.status(body.statusCode).json(body.body)
  }
  if (statusCode === 400) {
    return res.status(statusCode).json(body)
  }

  return res
    .cookie("access_token", body.token)
    .status(statusCode)
    .json(body.userData)
})

export { authRouter }
