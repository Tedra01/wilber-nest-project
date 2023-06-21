import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { RolesDecorator } from '../auth/roles.decorator';
import { DeleteResult } from 'typeorm';
import { Roles } from '../auth/roles.enum';

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(id: number): Promise<User> {
    return this.usersService.findOne({ where: { id } });
  }

  @Post()
  @RolesDecorator(Roles.Admin) 
  create(user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  @RolesDecorator(Roles.Admin) 
  update(id: number, user: User): Promise<User> {
    user.id = id;
    return this.usersService.update(user);
  }

  @Delete(':id')
  @RolesDecorator(Roles.Admin) 
  delete(id: number): Promise<DeleteResult> {
    return this.usersService.delete(id);
  }
}


