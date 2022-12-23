import client from '../database';

export type Product = {
  id?: number;
  name: string;
  price: number | string;
  category: string;
};

export class ProductWarehouse {
  async index(): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM products_table';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error('Cannot get products ${err}');
    }
  }

  async show(id: string): Promise<Product> {
    try {
      const sql = 'SELECT * FROM products_table WHERE id=($1)';
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find products_table ${id}. Error: ${err}`);
    }
  }

  async create(p: Product): Promise<Product> {
    try {
      const sql =
        'INSERT INTO products_table (name, price, category) VALUES($1, $2, $3) RETURNING *';

      const conn = await client.connect();
      const result = await conn.query(sql, [p.name, p.price, p.category]);
      const product = result.rows[0];
      conn.release();
      return product;
    } catch (err) {
      throw new Error(`Could not add new product ${p.name}. Error: ${err}`);
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const sql = 'DELETE FROM products_table WHERE id=($1)';
      const conn = await client.connect();
      await conn.query(sql, [id]);
      conn.release();
      return true;
    } catch (err) {
      throw new Error(`Could not delete product ${id}. ${err}`);
    }
  }
}
