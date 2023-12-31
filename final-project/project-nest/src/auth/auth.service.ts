// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { SignInAuthDto } from './dto/sign-in-auth.dto';
import { SignUpAuthDto } from './dto/sign-up-auth.dto';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService
  ) { }

  async signin(signInAuthDto: SignInAuthDto, response: Response) {
    const retrievedUser = await this.userRepository.findOneBy({ email: signInAuthDto.email });

    if (!retrievedUser) {
      return { response: "error [100]" };
    }

    try {
      if (await compare(signInAuthDto.password, retrievedUser.password)) {
        const payload = { id: retrievedUser.id, username: retrievedUser.username, email: retrievedUser.email };
        const token = await this.jwtService.signAsync(payload);
        // return { token: token };
        response.cookie('token', token);

        // return retrievedUser;
        return { message: "success" };
      }
      else {
        return { response: "incorrect" };
      }
    } catch (error) {
      return { response: "error [200]" };
    }
  }

  async signup(signUpAuthDto: SignUpAuthDto) {
    try {
      const hashedPassword = await hash(signUpAuthDto.password, 10);
      this.userRepository.save({ username: signUpAuthDto.username, email: signUpAuthDto.email, password: hashedPassword });
      return { message: "success" };
    } catch (error) {
      return { response: "error" };
    }
  }

  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
