import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { jwtConstants } from 'src/auth/constants';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [UserModule, JwtModule.register({ global: true, secret: jwtConstants.secret })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
