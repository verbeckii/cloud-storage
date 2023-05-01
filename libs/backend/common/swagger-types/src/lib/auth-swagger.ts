import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginBody {
  @ApiProperty({ example: 'test@gmail.com' })
  email: number;

  @ApiProperty({ example: 'topsecretpassword2' })
  password: string;
}

export class AuthLoginResponse {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9dkfnw9278732DS' })
  token: string;
}

export class AuthRegisterBody {
  @ApiProperty({ example: 'test@gmail.com' })
  email: number;

  @ApiProperty({ example: 'topsecretpassword2' })
  password: string;

  @ApiProperty({ example: 'Djonson D' })
  fullName: string;
}

export class AuthRegisterResponse {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9dkfnw9278732DS' })
  token: string;
}
