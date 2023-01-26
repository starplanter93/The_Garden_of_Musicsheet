import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
}
