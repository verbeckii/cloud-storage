import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserQueries } from '@cloud-storage/backend/queries';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private UserQueries: UserQueries) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any) {
    const user = await this.UserQueries.qGetUserById(+payload.id);
    
    if (!user) {
      throw new UnauthorizedException('You have no permission');
    }
    return {
      id: user.id,
    };
  }
}
