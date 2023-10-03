import { Router } from "express";
import { login, register } from "../controllers/users.js";
export const usersRouter = Router();
usersRouter.post('/', register);
usersRouter.post('/auth/login', login);
