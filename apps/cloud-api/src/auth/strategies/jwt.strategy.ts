import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Users } from '@cloud-storage/backend/queries';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private Users: Users) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any) {
    const user = await this.Users.qGetUserById(+payload.id);
    
    if (!user) {
      throw new UnauthorizedException('You have no permission');
    }
    return {
      id: user.id,
    };
  }
}
