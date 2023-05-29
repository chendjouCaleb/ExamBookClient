import {User} from "./models/user";

export class UserService {
  async addUserAsync(): Promise<User> {
    throw new Error('NotImplementedError');
  }

  async changeUserNameAsync(user: User, userName: string): Promise<void> {
    throw new Error('NotImplementedError');
  }

  async findByUserName(userName: string): Promise<User> {
    throw new Error('NotImplementedError');
  }

  async findById(id: string): Promise<User> {
    throw new Error('NotImplementedError');
  }

  async existsByEmail(email: string): Promise<boolean> {
    throw new Error('NotImplementedError');
  }

  async existsByUserName(userName: string): Promise<boolean> {
    throw new Error('NotImplementedError');
  }
}
