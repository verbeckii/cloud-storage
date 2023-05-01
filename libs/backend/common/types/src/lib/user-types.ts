import { users } from "@prisma/client";

export type UserCreate = Omit<users, 'id'>;
export type UserUpdate = users;
export type TUser = users;