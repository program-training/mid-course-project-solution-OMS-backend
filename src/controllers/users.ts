import { NextFunction, Request, Response } from "express";
import { User, getUsers } from "../Dal/users.js";
import { addUser, validateUser } from "../BL/users.js";
import { getToken } from "../BL/auth.js";
import {
  genericError,
  invalidEmailOrPasswordError,
  passwordMisMatchError,
  userAlreadyExistsError,
} from "../BL/errorHandeling.js";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, passwordConfirm, isAdmin } = req.body;
  if (password !== passwordConfirm) next(passwordMisMatchError());
  else {
    const user: User = {
      email,
      password,
      isAdmin,
    };
    try {
      const newUser = await addUser(user);
      newUser ? res.status(201).send(user) : next(userAlreadyExistsError());
    } catch (error) {
      console.log(error);
      next(genericError((error as Error).message));
    }
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const foundUser = await validateUser(email, password);
    if (foundUser) {
      const token = await getToken(foundUser);
      res.status(200).send(token);
    } else {
      next(invalidEmailOrPasswordError());
    }
  } catch (error) {
    console.log(error);
    next(genericError((error as Error).message));
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    next(genericError((error as Error).message));
  }
};
