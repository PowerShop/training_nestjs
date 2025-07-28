import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/entities/auth.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Kittisak644245001',
    database: 'training_01',
    entities: [Auth, Student],
    synchronize: true,
    logging: true,
  }),
  AuthModule,
  StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
