import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/entities/auth.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Kittisak644245001',
    database: 'training_01',
    entities: [Auth],
    synchronize: true,
    logging: true,
  }),
  AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
