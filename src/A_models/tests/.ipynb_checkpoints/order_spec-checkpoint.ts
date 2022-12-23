import { Order, OrderLog } from '../order';

const orderLog = new OrderLog();

describe('Order Model', () => {
  it('should have an index method', () => {
    expect(orderLog.index).toBeDefined();
  });
  it('should have a create method', () => {
    expect(orderLog.create).toBeDefined();
  });
  it('should have a delete method', () => {
    expect(orderLog.index).toBeDefined();
  });

  it('create method should add a orders', async () => {
    const result = await orderLog.create({
      user_id: 1,
      product_id: 1,
      quantity: 2,
      status: 'Current',
    });
    expect(result).toEqual({
      id: 1,
      order_number: '1',
      product_id: '1',
      quantity: 2,
      status: 'Current',
    });
  });
  it('should return a result for orders_table after create ', async () => {
    const result = await orderLog.index('orders_table');
    expect(result).toEqual([
      {
        id: 1,
        user_id: '1',
      },
    ]);
  });
  it('index method should return a list of orders', async () => {
    const result = await orderLog.index('order_products_table');
    expect(result).toEqual([
      {
        id: 1,
        order_number: '1',
        product_id: '1',
        quantity: 2,
        status: 'Current',
      },
    ]);
  });
  //   it('delete method should remove the user', async () => {
  //     await orderLog.delete(1);
  //     const result = await orderLog.index('order_products_table');
  //     expect(result).toEqual([]);
  //   });
  //   it('should return an empty result for orders_table after delete ', async () => {
  //     const result = await orderLog.index('orders_table');
  //     expect(result).toEqual([]);
  //   });
});
