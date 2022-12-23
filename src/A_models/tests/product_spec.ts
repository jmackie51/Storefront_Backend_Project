import { Product, ProductWarehouse } from '../product';

const productWarehouse = new ProductWarehouse();

describe('Product Model', () => {
  it('should have an index method', () => {
    expect(productWarehouse.index).toBeDefined();
  });
  it('should have a show method', () => {
    expect(productWarehouse.show).toBeDefined();
  });
  it('should have a create method', () => {
    expect(productWarehouse.create).toBeDefined();
  });
  it('should have a delete method', () => {
    expect(productWarehouse.index).toBeDefined();
  });

  it('create method should add a products', async () => {
    const result = await productWarehouse.create({
      name: 'Flower Pot',
      price: 5.99,
      category: 'Gardening',
    });
    expect(result).toEqual({
      id: 1,
      name: 'Flower Pot',
      price: '5.99',
      category: 'Gardening',
    });
  });
  it('index method should return a list of products', async () => {
    const result = await productWarehouse.index();
    expect(result).toEqual([
      {
        id: 1,
        name: 'Flower Pot',
        price: '5.99',
        category: 'Gardening',
      },
    ]);
  });
  it('show method should return the correct product', async () => {
    const result = await productWarehouse.show('1');
    expect(result).toEqual({
      id: 1,
      name: 'Flower Pot',
      price: '5.99',
      category: 'Gardening',
    });
  });
  //   it('delete method should remove the product', async () => {
  //     await productWarehouse.delete(1);
  //     const result = await productWarehouse.index();
  //     expect(result).toEqual([]);
  //   });
});
