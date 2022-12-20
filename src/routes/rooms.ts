import { Router } from "express"
import { createRoomController } from "../useCases/Rooms/CreateRoom"
import { verifyAdmin, verifyToken } from "../utils"

const roomsRouter = Router()

roomsRouter.post("/:hotelId", verifyToken, verifyAdmin, async (req, res) => {
  const { statusCode, body } = await createRoomController.handle(req)
  return res.status(statusCode).json(body)
})

export { roomsRouter }
