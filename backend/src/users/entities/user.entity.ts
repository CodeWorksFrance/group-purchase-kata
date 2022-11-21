import { UserInterface } from '../interfaces/user.interface';

export class User implements UserInterface {
  userId: number;
  password: string;
  username: string;

  constructor() {
    this.password = null;
    this.userId = null;
    this.username = null;
  }
}
