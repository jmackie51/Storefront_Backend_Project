"use strict";
// import { UserOrder, DashboardQueries } from '../dashboard';
// import { User, UserBase } from '../../models/user';
// import { Order, OrderLog } from '../../models/order';
// import { Product, ProductWarehouse } from '../../models/product';
// const dashboardQueries = new DashboardQueries();
// const userBase = new UserBase();
// const productWarehouse = new ProductWarehouse();
// const orderLog = new OrderLog();
// describe('Dashboard Model', () => {
//   it('usersWithOrders method should return all users with orders', async () => {
//     const result = await dashboardQueries.usersWithOrders();
//     expect(result[0]).toEqual({
//       firstname: 'Jon',
//       lastname: 'Mackie',
//     });
//   });
//   it('userOrder method should return the current order', async () => {
//     const result = await dashboardQueries.userOrder(1, 'Current');
//     expect(result[0]).toEqual({
//       order_number: '1',
//       quantity: 2,
//       status: 'Current',
//       firstname: 'Jon',
//       lastname: 'Mackie',
//       name: 'Flower Pot',
//       price: '5.99',
//     });
//   });
//   it('delete method should remove the user', async () => {
//     await orderLog.delete(1);
//     const result = await orderLog.index('order_products_table');
//     expect(result).toEqual([]);
//   });
//   it('should return an empty result for orders_table after delete ', async () => {
//     const result = await orderLog.index('orders_table');
//     expect(result).toEqual([]);
//   });
//   it('delete method should remove the product', async () => {
//     await productWarehouse.delete(1);
//     const result = await productWarehouse.index();
//     expect(result).toEqual([]);
//   });
//   it('delete method should remove the user', async () => {
//     await userBase.delete(1);
//     const result = await userBase.index();
//     expect(result).toEqual([]);
//   });
// });
