import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./verifyToken";

export const verifyAdmin = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        throw new Error("You are not admin")
      }
    });
};