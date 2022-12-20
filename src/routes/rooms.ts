import { Router } from "express"
import { createRoomController } from "../useCases/Rooms/CreateRoom"
import { getRoomController } from "../useCases/Rooms/GetRoom"
import { listRoomsController } from "../useCases/Rooms/ListRooms"
import { verifyAdmin, verifyToken } from "../utils"

const roomsRouter = Router()

roomsRouter.get("/", verifyToken, async (req, res) => {
  const { statusCode, body } = await listRoomsController.handle()
  return res.status(statusCode).json(body)
})

roomsRouter.get("/:id", verifyToken, async (req, res) => {
  const { statusCode, body } = await getRoomController.handle(req)
  return res.status(statusCode).json(body)
})

roomsRouter.post("/:hotelId", verifyToken, verifyAdmin, async (req, res) => {
  const { statusCode, body } = await createRoomController.handle(req)
  return res.status(statusCode).json(body)
})

export { roomsRouter }
