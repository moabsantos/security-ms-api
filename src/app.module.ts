import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { LoginUsuarioModule } from './login-usuario/login-mail.module';
import { DatabaseModule } from './_config/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    DatabaseModule,
    LoginUsuarioModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
