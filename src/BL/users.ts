import { compare, hash } from "bcrypt";
import { getUser, addUser as addUserDAL, User } from "../Dal/users.js";
import * as dotenv from "dotenv";
dotenv.config();

export const validateUser = async (email: string, password: string) => {
  const user = await getUser(email);
  if (
    !user ||
    !((await compare(password, user.password)) || password === user.password)
  )
    return null;
    console.log(user);
    
  return user;
};

export const addUser = async (user: User) => {
  const foundUser = await getUser(user.email);
  if (foundUser) return null;
  user.password = await hash(user.password, 10);
  const addedUser = await addUserDAL(user);
  return addedUser;
};
