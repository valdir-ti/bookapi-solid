import { Router } from "express";
import { createUsercontroller } from "../useCases/Users/CreateUser";
import { loginUserController } from "../useCases/Users/LoginUser";

const authRouter = Router();

authRouter.post("/register", (req, res) => {
  return createUsercontroller.handle(req, res);
});
authRouter.post("/login", (req, res) => {
  return loginUserController.handle(req, res);
});

export { authRouter };
