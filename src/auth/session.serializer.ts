import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser(user: User, done: (err: any, id?: any) => void): any {
    done(null, user.id);
  }

  async deserializeUser(id: any, done: (err: any, payload?: any) => void): Promise<any> {
    const user = await this.usersService.findOneById(id);
    done(null, user);
  }
}
