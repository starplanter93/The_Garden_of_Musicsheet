import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';
@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async registerAccount(
    @Req() req: Request,
    @Body() newUser: User,
  ): Promise<User> {
    return await this.authService.registerUser(newUser);
  }

  @Post('/login')
  async loginAccount(@Body() user: User): Promise<User> {
    return await this.authService.validateUser(user);
  }
}
