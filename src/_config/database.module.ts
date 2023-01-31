import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as dotenv from 'dotenv';
dotenv.config();

const configDb = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
  ],
  synchronize: true,
}

const config = {
  imports: [TypeOrmModule.forRoot(configDb),],
}

@Module(config)
export class DatabaseModule {}