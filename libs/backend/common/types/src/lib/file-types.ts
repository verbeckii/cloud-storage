import { files } from '@prisma/client';

export type FilesCreate = Omit<files, 'id' | 'deletedAt'>;
export type File = {
  filename: string;
  originalname: string;
  size: number;
  mimetype: string;
};
export enum FileType {
  PHOTO = 'image',
  TRASH = 'trash',
}
