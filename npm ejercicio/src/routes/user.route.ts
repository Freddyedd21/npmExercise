import { Request, Response, Router } from "express";
import { userController } from "../controllers/user.controller";
export const userRouter = Router();

userRouter.post('/', userController.create);
userRouter.put('/:id', userController.update);
userRouter.get('/:id', userController.get);
userRouter.delete('/:id', userController.delete);
userRouter.get('/', userController.getAll);




