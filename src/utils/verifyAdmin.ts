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
        return res.status(401).json("You are not admin")
      }
    })
  } catch (error) {
    return res.status(500).json("Something went wrong")
  }
}
