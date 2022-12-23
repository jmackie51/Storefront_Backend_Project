import client from '../database';

export type Order = {
  id?: number;
  user_id?: number | string;
  product_id?: number | string;
  order_number?: number | string;
  quantity?: number | string;
  status?: string;
};

export class OrderLog {
  async index(tableName: string): Promise<Order[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * FROM ${tableName}`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get orders ${err}`);
    }
  }

  async create(o: Order): Promise<Order> {
    let orderNum: number | string;
    try {
      const sql = 'INSERT INTO orders_table (user_id) VALUES($1) RETURNING *';

      const conn = await client.connect();
      const result = await conn.query(sql, [o.user_id]);
      const order = result.rows[0];
      orderNum = result.rows[0].user_id;
      conn.release();
      //return order;
    } catch (err) {
      throw new Error(
        `Could not add new order for ${o.user_id}. Error: ${err}`
      );
    }

    try {
      const sql =
        'INSERT INTO order_products_table (order_number, product_id, quantity, status) VALUES($1, $2, $3, $4) RETURNING *';

      const conn = await client.connect();
      const result = await conn.query(sql, [
        orderNum,
        o.product_id,
        o.quantity,
        o.status,
      ]);
      const order_products = result.rows[0];
      conn.release();
      return order_products;
    } catch (err) {
      throw new Error(
        `Could not add new order for the follow in product: ${o.product_id}. Error: ${err}`
      );
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const sql = 'DELETE FROM order_products_table WHERE id=($1)';
      const conn = await client.connect();
      await conn.query(sql, [id]);
      conn.release();
      //return true;
    } catch (err) {
      throw new Error(`Could not delete user ${id}. ${err}`);
    }

    try {
      const sql = 'DELETE FROM orders_table WHERE id=($1)';
      const conn = await client.connect();
      await conn.query(sql, [id]);
      conn.release();
      return true;
    } catch (err) {
      throw new Error(`Could not delete user ${id}. ${err}`);
    }
  }
}
