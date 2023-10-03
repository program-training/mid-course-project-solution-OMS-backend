import { pool } from "./connections.js";
export const addUser = async (user) => {
    const { rows } = await pool.query(`INSERT INTO admin (email, password, isadmin) 
        VALUES ($1, $2, $3) RETURNING *`, [user.email, user.password, user.isAdmin]);
    return rows[0];
};
export const updateUser = async (user) => {
    const { rows } = await pool.query(`UPDATE admin 
     SET email = $2, password = $3, isadmin = $4
     WHERE id = $1 RETURNING *`, [user.id, user.email, user.password, user.isAdmin]);
    return rows[0];
};
export const deleteUser = async (id) => {
    const { rows } = await pool.query(`DELETE FROM admin 
     WHERE id = $1 RETURNING *`, [id]);
    return rows[0];
};
export const validateUser = async (email, password) => {
    const { rows } = await pool.query(`SELECT * 
         FROM admin 
         WHERE email = $1 AND password = $2`, [email, password]);
    return !!rows.length;
};
export const getUsers = async () => {
    const { rows } = await pool.query(`SELECT * 
     FROM admin `);
    return rows;
};
