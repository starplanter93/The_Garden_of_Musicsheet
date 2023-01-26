import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private PrismaService: PrismaService) {}

  //회원가입
  async registerUser(newUser: User): Promise<User> {
    const userNameValdation: User = await this.PrismaService.user.findUnique({
      where: { userName: newUser.userName },
    });

    if (userNameValdation) {
      throw new HttpException(
        '이미 등록된 사용자 이름입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.PrismaService.user.create({ data: newUser });
  }

  //로그인
  async validateUser(user: User): Promise<User> {
    const userValidation: User = await this.PrismaService.user.findUnique({
      where: { userEmail: user.userEmail },
    });

    if (!userValidation || user.password !== userValidation.password) {
      throw new UnauthorizedException();
    }
    return userValidation;
  }
}
