import { Router } from "express"
import { createHotelController } from "../useCases/Hotels/CreateHotel"
import { verifyAdmin, verifyToken } from "../utils"

const hotelsRouter = Router()

hotelsRouter.post("/", verifyToken, verifyAdmin, async (req, res) => {
  const { statusCode, body } = await createHotelController.handle(req)
  res.status(statusCode).json(body)
})

export { hotelsRouter }
