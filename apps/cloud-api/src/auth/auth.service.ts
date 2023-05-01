import { Injectable } from '@nestjs/common';
import { UserQueries } from '@cloud-storage/backend/queries';
import { users as TUsers } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly UserQueries: UserQueries,
    private readonly JwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    try {
      const user = await this.UserQueries.qGetUserByEmail(email);
      if (user ?? user.password !== password) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      }
      return null;
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  }

  async register(data: TUsers) {
    try {
      const user = await this.UserQueries.qCreateUser(data);
      return {
        token: this.JwtService.sign({ id: user.id }),
      };
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  }

  async login(data: TUsers) {
    try {
      const payload = { id: data.id };
      return { token: this.JwtService.sign(payload) };
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  }
}
