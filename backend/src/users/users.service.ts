import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'alexis',
      password: 'ragot',
    },
    {
      userId: 2,
      username: 'john',
      password: 'do',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
