import { pool } from "./connections.js";

export interface User {
  id?: number; 
  email: string;
  password: string;
  isAdmin: boolean;
}

export const addUser = async (user: User) => {
  const { rows } = await pool.query(
    `INSERT INTO admin (email, password, isadmin) 
        VALUES ($1, $2, $3) RETURNING *`,
    [user.email, user.password, user.isAdmin]
  );
  return rows[0] as User;
};

export const updateUser = async (user: User) => {
  const { rows } = await pool.query(
    `UPDATE admin 
     SET email = $2, password = $3, isadmin = $4
     WHERE id = $1 RETURNING *`,
    [user.id, user.email, user.password, user.isAdmin]
  );
  return rows[0] as User;
};

export const deleteUser = async (id: number) => {
  const { rows } = await pool.query(
    `DELETE FROM admin 
     WHERE id = $1 RETURNING *`,
    [id]
  );
  return rows[0] as User;
};

export const getUser = async (searchEmail: string) =>{
    const { rows } = await pool.query(
        `SELECT * 
         FROM admin 
         WHERE email = $1`,
        [searchEmail]
      );
      if(!rows.length) return null;
      const user: User = {email:rows[0].email, password: rows[0].password, isAdmin: rows[0].isadmin};
      return user;
}

export const getUsers = async () =>{
  const { rows } = await pool.query(
    `SELECT * 
     FROM admin `,

  );
  return rows
}