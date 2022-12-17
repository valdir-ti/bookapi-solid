import { Request, Response, NextFunction } from "express"
import { verifyToken } from "./verifyToken"

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next()
      } else {
        res.status(401).json("You are not admin")
      }
    })
  } catch (error) {
    res.status(500).json("Something went wrong")
  }
}
