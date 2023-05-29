import {User} from "./user";

export class Session {
  id: string = '';
  createdAt: Date;

  userId: string = '';
  user: User

  endAt: Date;
  isClose(): boolean {
    return this.endAt != null;
  }
}
