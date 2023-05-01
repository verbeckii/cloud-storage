import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserQueries } from '@cloud-storage/backend/queries';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService} from '@cloud-storage/backend/services';
import { UsersModule } from '../users/users.module';
import { LocalStrategy, JwtStrategy } from '@cloud-storage/backend/auth';


@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get('SECRET_KEY'),
          signOptions: { expiresIn: configService.get('EXPIRES_IN') },
        };
      },
    }),
    PassportModule,
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, UserQueries, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
