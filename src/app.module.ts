import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Kittisak644245001',
    database: 'training_01',
    entities: [],
    synchronize: true,
  }),

  ],
  controllers: [AuthController],
  providers: [AppService],
})

export class AppModule {}
