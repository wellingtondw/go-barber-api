import { getRepository } from 'typeorm';
import User from '../models/Users';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email already exists.');
    }

    const user = await usersRepository.create({
      name,
      email,
      password,
    });

    usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
