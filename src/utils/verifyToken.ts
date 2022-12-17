import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.headers.cookie) res.status(400).json("You are not authenticated")

    const token = req.headers.cookie.split("=")
    const access_token = token[1]

    if (!access_token) res.status(400).json("You are not authenticated")

    const secret = process.env.JWT_SECRET || "secretkey"

    if (!access_token) res.status(400).json("You are not authenticated")

    jwt.verify(access_token, secret, (err: any, user: any) => {
      if (err) res.status(401).json("Invalid credentials")

      req.user = user
      next()
    })
  } catch (error) {
    return res.status(500).json("Something went wrong")
  }
}

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next()
      } else {
        res.status(401).json("You are not authorized")
      }
    })
  } catch (error) {
    return res.status(500).json("Something went wrong")
  }
}
