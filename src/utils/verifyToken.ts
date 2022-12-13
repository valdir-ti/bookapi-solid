import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    if (!req.headers.cookie) throw new Error("You are not authenticated")

    const token = req.headers.cookie.split("=")
    const access_token = token[1]

    if (!access_token) throw new Error("You are not authenticated")

    const secret = process.env.JWT_SECRET || "secretkey";

    if (!access_token) throw new Error("You are not authenticated")

    jwt.verify(access_token, secret, (err: any, user: any) => {
      if (err) throw new Error("Invalid credentials")

      req.user = user;
      next();
    });
  };