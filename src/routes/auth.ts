import { Router } from "express"
import { createUserController } from "../useCases/Users/CreateUser"
import { loginUserController } from "../useCases/Users/LoginUser"

const authRouter = Router()

authRouter.post("/register", async (req, res) => {
  const user = await createUserController.handle(req, res)
  return res.send(user)
})
authRouter.post("/login", (req, res) => {
  return loginUserController.handle(req)
})

export { authRouter }
