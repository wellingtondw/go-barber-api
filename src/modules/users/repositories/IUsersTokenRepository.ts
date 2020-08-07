import UserToken from '../infra/typeorm/entities/UsersToken';

export default interface IUsersTokenRepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
}
