import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'postgres',
    entities: [User],
    synchronize: true,
    // logging: true,
    subscribers: [],
    migrations: [],
  }), UserModule, AuthModule, DashboardModule],
  controllers: [/* AppController */],
  providers: [/* AppService */],
})
export class AppModule { }
