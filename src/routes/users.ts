import { Router } from "express"
import { getUserController } from "../useCases/Users/GetUser"
import { listUsersController } from "../useCases/Users/ListUsers"
import { verifyToken } from "../utils"

const usersRouter = Router()

usersRouter.get("/", verifyToken, async (req, res) => {
  const { statusCode, body } = await listUsersController.handle()
  return res.status(statusCode).json(body)
})

usersRouter.get("/:id", verifyToken, async (req, res) => {
  const { statusCode, body } = await getUserController.handle(req)
  return res.status(statusCode).json(body)
})

export { usersRouter }
