import client from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const { BCRYPT_PASSWORD, SALT_ROUNDS, ENV } = process.env;

export type User = {
  id?: number;
  firstname: string;
  lastname: string;
  password_digest: string;
  username: string;
};

export class UserBase {
  async index(): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM users_table';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get users ${err}`);
    }
  }

  async show(id: string): Promise<User> {
    try {
      const sql = 'SELECT * FROM users_table WHERE id=($1)';
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find user of ID# ${id}. Error: ${err}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      const sql =
        'INSERT INTO users_table (firstname, lastname, password_digest, username) VALUES($1, $2, $3, $4) RETURNING *';
      const conn = await client.connect();
      let hash: string = bcrypt.hashSync(
        u.password_digest + BCRYPT_PASSWORD,
        parseInt(SALT_ROUNDS as string)
      );
      if (ENV == 'test') {
        hash = u.password_digest;
      }
      const result = await conn.query(sql, [
        u.firstname,
        u.lastname,
        hash,
        u.username,
      ]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(
        `Could not add new user ${u.firstname} ${u.lastname}. Error: ${err}`
      );
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const sql = 'DELETE FROM users_table WHERE id=($1)';
      const conn = await client.connect();
      await conn.query(sql, [id]);
      conn.release();
      return true;
    } catch (err) {
      throw new Error(`Could not delete user ${id}. ${err}`);
    }
  }

  async authenticate(username: string, password: string): Promise<User | null> {
    try {
      const conn = await client.connect();
      const sql =
        'SELECT passwordpassword_digest FROM users WHERE userName=($1)';
      const result = await conn.query(sql, [username]);
      console.log(password + BCRYPT_PASSWORD);
      if (result.rows.length) {
        const user = result.rows[0];
        console.log(user);
        if (
          bcrypt.compareSync(password + BCRYPT_PASSWORD, user.password_digest)
        ) {
          return user;
        }
      }
      conn.release();
      return null;
    } catch (err) {
      throw new Error(`unable create user (${username}): ${err}`);
    }
  }
}
