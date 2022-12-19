import { Router } from "express"
import { createUserController } from "../useCases/Users/CreateUser"
import { loginUserController } from "../useCases/Users/LoginUser"

const authRouter = Router()

authRouter.post("/register", async (req, res) => {
  const user = await createUserController.handle(req, res)
  return res.send(user)
})
authRouter.post("/login", async (req, res) => {
  const resp = await loginUserController.handle(req)
  return res
    .cookie("access_token", resp.body.token)
    .status(resp.statusCode)
    .json(resp.body.userData)
})

export { authRouter }
