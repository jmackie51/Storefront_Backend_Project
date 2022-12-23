import client from '../database';

export type UserOrder = {
  order_number?: number | string;
  quantity?: number | string;
  status?: string;
  firstname: string;
  lastname: string;
  name?: string;
  price?: number | string;
};

export class DashboardQueries {
  // Get all users that have made orders
  async usersWithOrders(): Promise<{ firstname: string; lastname: string }[]> {
    try {
      const conn = await client.connect();
      const sql =
        'SELECT firstName, lastName FROM users_table users INNER JOIN orders_table orders ON users.id = orders.user_id';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`unable get users with orders: ${err}`);
    }
  }

  // Get all users that have made orders
  async userOrder(user_id: number, status: string): Promise<UserOrder[]> {
    try {
      const conn = await client.connect();
      const sql = `Select op.order_number, op.quantity, op.status, u.firstName, u.lastName, p.name, p.price 
                        From order_products_table op 
                        INNER JOIN orders_table o ON op.order_number = o.id
                        INNER JOIN products_table p ON op.product_id = p.id
                        INNER JOIN users_table u ON o.user_id = u.id
                        WHERE u.id = ($1) AND op.status = ($2)`;
      const result = await conn.query(sql, [user_id, status]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`unable get users with orders: ${err}`);
    }
  }
}
