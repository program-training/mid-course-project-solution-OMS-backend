import { Router } from "express";
import { getAllUsers, login, register } from "../controllers/users.js";
import { validateAdminToken } from "../controllers/auth.js";

export const usersRouter = Router();

usersRouter.post('/',validateAdminToken,register);

usersRouter.post('/auth/login',login);

usersRouter.get('/',validateAdminToken,getAllUsers);