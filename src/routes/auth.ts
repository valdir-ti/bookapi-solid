import { Router } from "express"
import { createUsercontroller } from "../useCases/Users/CreateUser"
import { loginUserController } from "../useCases/Users/LoginUser"

const authRouter = Router()

authRouter.post("/register", async (req, res) => {
  const { statusCode, body } = await createUsercontroller.handle(req)

  res.status(statusCode).json(body)
})
authRouter.post("/login", (req, res) => {
  return loginUserController.handle(req, res)
})

export { authRouter }
