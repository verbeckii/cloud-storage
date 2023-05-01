import { Injectable } from '@nestjs/common';
import { users as TUsers } from '@prisma/client';
import { UserQueries } from '@cloud-storage/backend/queries';

@Injectable()
export class UsersService {
  constructor(private readonly UserQueries: UserQueries) {}

  async getUsers() {
    try {
      const result = await this.UserQueries.qGetUsers();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserById(id: number) {
    try {
      const result = await this.UserQueries.qGetUserById(id);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserByEmail(email: string) {
    try {
      const result = await this.UserQueries.qGetUserByEmail(email);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createUser(data: TUsers) {
    try {
      const result = await this.UserQueries.qCreateUser(data);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateUser(data: TUsers) {
    try {
      const result = await this.UserQueries.qUpdateUser(data);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteUser(id: number) {
    try {
      const result = await this.UserQueries.qDeleteUser(id);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
