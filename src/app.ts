import express, { Request, Response } from "express"
import { authRouter, hotelsRouter, roomsRouter, usersRouter } from "./routes"
import { verifyToken } from "./utils"

const app = express()

app.use(express.json())

app.get("/", verifyToken, (req: Request, res: Response) => {
  return res.status(200).json({ message: "Initial Route" })
})

app.use("/auth", authRouter)
app.use("/hotels", hotelsRouter)
app.use("/rooms", roomsRouter)
app.use("/users", usersRouter)

export { app }
