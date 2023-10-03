import { Router } from "express";
import { getAllUsers, login, register } from "../controllers/users.js";
export const usersRouter = Router();
usersRouter.post('/', register);
usersRouter.post('/auth/login', login);
usersRouter.get('/', getAllUsers);
