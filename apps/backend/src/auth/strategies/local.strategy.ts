import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  validate(username: string, password: string): any {
    // Implement your local authentication logic here
    return { id: 1, username };
  }
}
