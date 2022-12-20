import { Router } from "express"
import { createHotelController } from "../useCases/Hotels/CreateHotel"
import { listHotelsController } from "../useCases/Hotels/ListHotels"
import { verifyAdmin, verifyToken } from "../utils"

const hotelsRouter = Router()

hotelsRouter.get("/", verifyToken, async (req, res) => {
  const { statusCode, body } = await listHotelsController.handle()
  return res.status(statusCode).json(body)
})

hotelsRouter.post("/", verifyToken, verifyAdmin, async (req, res) => {
  const { statusCode, body } = await createHotelController.handle(req)
  return res.status(statusCode).json(body)
})

export { hotelsRouter }
