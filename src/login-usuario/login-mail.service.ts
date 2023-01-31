import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { LoginMail } from "./login-mail.entity";

@Injectable()
export class LoginMailService extends TypeOrmCrudService<LoginMail> {
    constructor(@InjectRepository(LoginMail) repo: any){
        super(repo)
    }
}