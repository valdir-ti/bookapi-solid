import { Router } from "express"
import { deleteUserController } from "../useCases/Users/DeleteUser"
import { getUserController } from "../useCases/Users/GetUser"
import { listUsersController } from "../useCases/Users/ListUsers"
import { verifyAdmin, verifyToken } from "../utils"

const usersRouter = Router()

usersRouter.get("/", verifyToken, async (req, res) => {
  const { statusCode, body } = await listUsersController.handle()
  return res.status(statusCode).json(body)
})

usersRouter.get("/:id", verifyToken, async (req, res) => {
  const { statusCode, body } = await getUserController.handle(req)
  return res.status(statusCode).json(body)
})

usersRouter.delete("/:id", verifyToken, verifyAdmin, async (req, res) => {
  const { statusCode, body } = await deleteUserController.handle(req)
  return res.status(statusCode).json(body)
})

export { usersRouter }
