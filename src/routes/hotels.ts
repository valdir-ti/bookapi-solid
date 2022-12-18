import { Router } from "express"
import { createHotelController } from "../useCases/Hotels/CreateHotel"

const hotelsRouter = Router()

hotelsRouter.post("/", async (req, res) => {
  const { statusCode, body } = await createHotelController.handle(req)
  res.status(statusCode).json(body)
})

export { hotelsRouter }
