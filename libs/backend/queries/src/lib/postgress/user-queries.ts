import { Injectable } from '@nestjs/common';
import { prisma } from '@cloud-storage/backend/common/prisma-client';
import { users as TUsers } from "@prisma/client";

@Injectable()
export class UserQueries {

  async qGetUsers() {
    const users = await prisma.users.findMany();
    return users;
  }

  async qGetUserByEmail(email: string) {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });
    return user;
  }
  async qGetUserById(id: number) {
    const user = await prisma.users.findFirst({
      where: {
        id,
      },
    });
    return user;
  }

  async qUpdateUser(data: TUsers) {
    const user = await prisma.users.update({
      where: {
        id: data.id,
      },
      data,
    });
    return user;
  }

  async qCreateUser(data: TUsers) {
    const user = await prisma.users.create({
      data,
    });
    return user;
  }

  async qDeleteUser(id: number) {
    const user = await prisma.users.delete({
      where: {
        id,
      },
    })
    return user;
  }
  
}