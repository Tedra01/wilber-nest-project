import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, FindOneOptions  } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOne(options: FindOneOptions<User>): Promise<User> {
    return this.usersRepository.findOne(options);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  update(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }

  async findOneById(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }
  
  async findOneByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username } });
  }
}
