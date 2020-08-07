import { getRepository, Repository } from 'typeorm';

import UsersToken from '@modules/users/infra/typeorm/entities/UsersToken';
import IUsersTokenRepository from '@modules/users/repositories/IUsersTokenRepository';

class UserTokensRepository implements IUsersTokenRepository {
  private ormRepository: Repository<UsersToken>;

  constructor() {
    this.ormRepository = getRepository(UsersToken);
  }

  public async findByToken(token: string): Promise<UsersToken | undefined> {
    const user = await this.ormRepository.findOne({
      where: { token },
    });

    return user;
  }

  public async generate(user_id: string): Promise<UsersToken> {
    const userToken = this.ormRepository.create({ user_id });

    await this.ormRepository.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
