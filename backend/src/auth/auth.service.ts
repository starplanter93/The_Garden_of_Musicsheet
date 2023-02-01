import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

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

    newUser.password = await bcrypt.hash(newUser.password, 10);

    return this.PrismaService.user.create({ data: newUser });
  }

  //로그인
  async validateUser(user: User): Promise<string> {
    const userValidation: User = await this.PrismaService.user.findUnique({
      where: { userEmail: user.userEmail },
    });

    const passwordValidation = await bcrypt.compare(
      user.password,
      userValidation.password,
    );

    console.log(passwordValidation);

    if (!userValidation || !passwordValidation) {
      throw new UnauthorizedException();
    }
    return '로그인에 성공했습니다.';
  }
}
