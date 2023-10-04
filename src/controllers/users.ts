import { Request, Response } from "express";
import { User, getUsers } from "../Dal/users.js";
import { addUser, validateUser } from "../BL/users.js";
import { getToken } from "../BL/auth.js";

export const register = async (req: Request, res: Response) => {
  const { email, password, passwordConfirm, isAdmin } = req.body;
  if (password !== passwordConfirm)
    res.status(400).send("passwords do not match");
  else {
    const user: User = {
      email,
      password,
      isAdmin,
    };
    const newUser = await addUser(user);
    newUser
      ? res.status(201).send(user)
      : res.status(400).send("user already exists");
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const foundUser = await validateUser(email, password);
  if (foundUser) {
    const token = await getToken(foundUser);
    res.status(200).send(token);
  } else {
    res.status(400).send("invalid credentials");
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.status(200).send(users);
};
