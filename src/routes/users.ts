import { Router } from "express"
import { listUsersController } from "../useCases/Users/ListUsers"
import { verifyToken } from "../utils"

const usersRouter = Router()

usersRouter.get("/", verifyToken, async (req, res) => {
  const { statusCode, body } = await listUsersController.handle()
  return res.status(statusCode).json(body)
})

export { usersRouter }
