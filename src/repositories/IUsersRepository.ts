import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  findByUserName(username: string): Promise<User>;
  findOne(username: string): Promise<User>;
  save(user: User): Promise<void>;
}
