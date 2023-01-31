import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { LoginMail } from "./login-mail.entity";
import { LoginMailController } from "./login-mail.controller";
import { LoginMailService } from "./login-mail.service";

@Module({
    imports: [
      TypeOrmModule.forFeature([
        LoginMail
      ])],
    controllers: [
      LoginMailController
    ],
    providers: [
      LoginMailService
    ],
  })
  export class LoginUsuarioModule {}