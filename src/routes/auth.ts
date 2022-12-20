import { Router } from "express"
import { createUserController } from "../useCases/Users/CreateUser"
import { loginUserController } from "../useCases/Users/LoginUser"
import { verifyAdmin, verifyToken } from "../utils"

const authRouter = Router()

authRouter.post("/register", verifyToken, verifyAdmin, async (req, res) => {
  const { statusCode, body } = await createUserController.handle(req)
  return res.status(statusCode).json(body)
})

authRouter.post("/login", async (req, res) => {
  const resp = await loginUserController.handle(req)
  return res
    .cookie("access_token", resp.body.token)
    .status(resp.statusCode)
    .json(resp.body.userData)
})

export { authRouter }
