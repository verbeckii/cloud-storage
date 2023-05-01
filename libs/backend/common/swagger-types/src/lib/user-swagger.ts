import { ApiProperty } from '@nestjs/swagger';

export class CreateUserBody {
  @ApiProperty({ example: 'test123213@mail.ru' })
  email: string;

  @ApiProperty({ example: 'testdsds3232' })
  password: string;

  @ApiProperty({ example: 'Dmitrii' })
  fullName: string | null;
}

export class UserResponse {
  @ApiProperty({ example: 1 })
  id: string;

  @ApiProperty({ example: 'test123213@mail.ru' })
  email: string;

  @ApiProperty({ example: 'Dmitrii' })
  fullName: string | null;
}

export class UserProfile {
  @ApiProperty({ example: 1 })
  id: string;

  @ApiProperty({ example: 'test123213@mail.ru' })
  email: string;

  @ApiProperty({ example: 'Dmitrii' })
  fullName: string | null;
}
