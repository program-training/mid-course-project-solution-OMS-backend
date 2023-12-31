import { addUser, getUsers, validateUser } from "../Dal/users.js";
export const register = async (req, res) => {
    const { email, password, passwordConfirm, isAdmin } = req.body;
    if (password !== passwordConfirm)
        res.status(400).send("passwords do not match");
    const user = {
        email,
        password,
        isAdmin,
    };
    await addUser(user);
    res.status(201).send(user);
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    const isValid = await validateUser(email, password);
    isValid ? res.status(200).send("ok") : res.status(400).send("user not found");
};
export const getAllUsers = async (req, res) => {
    const users = await getUsers();
    res.status(200).send(users);
};
