import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local.guard';
import { UserCreate } from '@cloud-storage/backend/common/types';
import { AuthLoginBody, AuthLoginResponse, AuthRegisterBody, AuthRegisterResponse } from '@cloud-storage/backend/common/swagger-types';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({type: AuthLoginBody})
  @ApiResponse({status: 200, type: [AuthLoginResponse], description: 'Returns token'})
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  @ApiBody({type: AuthRegisterBody})
  @ApiResponse({status: 200, type: [AuthRegisterResponse], description: 'Returns token'})
  async register(@Body() data: UserCreate) {
    return this.authService.register(data);
  }
}
