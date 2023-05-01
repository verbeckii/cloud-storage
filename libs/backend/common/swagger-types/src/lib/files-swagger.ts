import { ApiProperty } from '@nestjs/swagger';

export class UserFilesResponse {
  @ApiProperty({ example: 1 })
  id: string;
  
  @ApiProperty({ example: 'hah869hbdgc88f5ah3.world.png' })
  filename: string;

  @ApiProperty({ example: 'world.png' })
  originalname: string;

  @ApiProperty({ example: 2942156 })
  size: string;

  @ApiProperty({ example: 'image/png' })
  mimetype: string;

  @ApiProperty({ example: null })
  deletedAt: Date | null;

  @ApiProperty({ example: 5 })
  userId: number;
}