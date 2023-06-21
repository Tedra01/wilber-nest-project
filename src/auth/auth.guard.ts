import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Roles } from './roles.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector, private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<Roles[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = request.cookies['token']; 
    if (!token) {
      return false;
    }
    try {
      const decoded = this.jwtService.verify(token);
      if (!decoded || !decoded.roles) {
        return false;
      }
      return roles.some((role) => decoded.roles.includes(role));
    } catch (error) {
      return false;
    }
  }
}
