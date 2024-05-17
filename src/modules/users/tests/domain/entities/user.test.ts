import { User } from '@/modules/users/domain/entities/user';

const userData = {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
  confirmPassword: 'password123',
  phone: '123456789',
};

const user = new User(userData);

describe('Testing the User class', () => {
  it('Must create a User instance with the correct attributes', () => {
    expect(user).toBeInstanceOf(User);
    expect(user.id).toBeDefined();
    expect(user.name).toBe(userData.name);
    expect(user.email).toBe(userData.email);
    expect(user.password).toBe(userData.password);
    expect(user.phone).toBe(userData.phone);
  });

  it('Must generate a unique id if no id is provided in the constructor', () => {
    expect(user.id).toBeDefined();
  });
});
