import { Router } from "express"
import { countByCityNameController } from "../useCases/Hotels/CountByCityName"
import { countByTypeController } from "../useCases/Hotels/CountByType"
import { createHotelController } from "../useCases/Hotels/CreateHotel"
import { deleteHotelController } from "../useCases/Hotels/DeleteHotel"
import { getHotelController } from "../useCases/Hotels/GetHotel"
import { listHotelsController } from "../useCases/Hotels/ListHotels"
import { updateHotelController } from "../useCases/Hotels/UpdateHotel"
import { verifyAdmin, verifyToken } from "../utils"

const hotelsRouter = Router()

hotelsRouter.get("/", async (req, res) => {
  const { statusCode, body } = await listHotelsController.handle(req.query)
  return res.status(statusCode).json(body)
})

hotelsRouter.get("/countByCityName", async (req, res) => {
  const { statusCode, body } = await countByCityNameController.handle(req)
  return res.status(statusCode).json(body)
})

hotelsRouter.get("/countByType", async (req, res) => {
  const { statusCode, body } = await countByTypeController.handle()
  return res.status(statusCode).json(body)
})

hotelsRouter.get("/:id", async (req, res) => {
  const { statusCode, body } = await getHotelController.handle(req)
  return res.status(statusCode).json(body)
})

hotelsRouter.delete("/:id", verifyToken, verifyAdmin, async (req, res) => {
  const { statusCode, body } = await deleteHotelController.handle(req)
  return res.status(statusCode).json(body)
})

hotelsRouter.patch("/:id", verifyToken, verifyAdmin, async (req, res) => {
  const { statusCode, body } = await updateHotelController.handle(req)
  return res.status(statusCode).json(body)
})

hotelsRouter.post("/", verifyToken, verifyAdmin, async (req, res) => {
  const { statusCode, body } = await createHotelController.handle(req)
  return res.status(statusCode).json(body)
})

export { hotelsRouter }
