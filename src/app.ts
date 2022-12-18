import express, { Request, Response } from "express"
import { authRouter, hotelsRouter } from "./routes"
import { verifyToken } from "./utils"

const app = express()

app.use(express.json())

app.get("/", verifyToken, (req: Request, res: Response) => {
  res.status(200).json({ message: "Initial Route" })
})

app.use("/auth", authRouter)
app.use("/hotels", hotelsRouter)

export { app }
