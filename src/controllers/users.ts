import { Request, Response } from "express";
import { User, addUser, validateUser } from "../Dal/users.js";

export const register = async (req: Request, res: Response) => {
  const { email, password, passwordConfirm, isAdmin } = req.body;
  if (password !== passwordConfirm)
    res.status(400).send("passwords do not match");
  const user: User = {
    email,
    password,
    isAdmin,
  };
  await addUser(user);
  res.status(201).send(user);
};

export const login = async (req: Request, res: Response) => {
  const { email, password, passwordConfirm, isAdmin } = req.body;
  if (password !== passwordConfirm)
    res.status(400).send("passwords do not match");
  const isValid = await validateUser(email, password);
  isValid ? res.status(200).send("ok") : res.status(400).send("user not found");
};

