import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { User } from "../Dal/users";
dotenv.config();
export const validateToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JSWSECRET!);
    return decoded;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getToken = async (user: User) =>
  jwt.sign(
    { email: user.email, password: user.password, isAdmin: user.isAdmin },
    process.env.JSWSECRET!
  );
