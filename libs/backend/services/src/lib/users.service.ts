import { Injectable } from '@nestjs/common';
import { users as TUsers } from '@prisma/client';
import { Users } from '@cloud-storage/backend/queries';

@Injectable()
export class UsersService {
  constructor(private readonly Users: Users) {}

  async getUsers() {
    try {
      const result = await this.Users.qGetUsers();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserById(id: number) {
    try {
      const result = await this.Users.qGetUserById(id);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserByEmail(email: string) {
    try {
      const result = await this.Users.qGetUserByEmail(email);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createUser(data: TUsers) {
    try {
      const result = await this.Users.qCreateUser(data);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateUser(data: TUsers) {
    try {
      const result = await this.Users.qUpdateUser(data);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteUser(id: number) {
    try {
      const result = await this.Users.qDeleteUser(id);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
