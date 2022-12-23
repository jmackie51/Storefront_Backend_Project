import { User, UserBase } from '../user';

const userBase = new UserBase();
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;

describe('User Model', () => {
  it('should have an index method', () => {
    expect(userBase.index).toBeDefined();
  });
  it('should have a show method', () => {
    expect(userBase.show).toBeDefined();
  });
  it('should have a create method', () => {
    expect(userBase.create).toBeDefined();
  });
  it('should have a delete method', () => {
    expect(userBase.index).toBeDefined();
  });

  it('create method should add a user', async () => {
    const result = await userBase.create({
      firstname: 'Jon',
      lastname: 'Mackie',
      password_digest: 'Password123',
      username: 'j.mackie',
    });
    expect(result).toEqual({
      id: 1,
      firstname: 'Jon',
      lastname: 'Mackie',
      password_digest: 'Password123',
      username: 'j.mackie',
    });
  });
  it('index method should return a list of users', async () => {
    const result = await userBase.index();
    expect(result).toEqual([
      {
        id: 1,
        firstname: 'Jon',
        lastname: 'Mackie',
        password_digest: 'Password123',
        username: 'j.mackie',
      },
    ]);
  });
  it('show method should return the correct user', async () => {
    const result = await userBase.show('1');
    expect(result).toEqual({
      id: 1,
      firstname: 'Jon',
      lastname: 'Mackie',
      password_digest: 'Password123',
      username: 'j.mackie',
    });
  });
//     it('delete method should remove the user', async () => {
//       await userBase.delete(1);
//       const result = await userBase.index();
//       expect(result).toEqual([]);
//     });
});
