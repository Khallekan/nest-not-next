import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

// import { JwtStrategy } from 'src/auth/strategy';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getMe(user: User) {
    return { data: user };
  }
}
