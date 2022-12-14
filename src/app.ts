import express, { Request, Response } from "express"
import { authRouter } from "./routes"
import { verifyAdmin, verifyToken } from "./utils"

const app = express()

app.use(express.json())

app.get("/", verifyToken, verifyAdmin, (req: Request, res: Response) => {
  res.status(200).json({ message: "Initial Route" })
})

app.use("/auth", authRouter)

export { app }
