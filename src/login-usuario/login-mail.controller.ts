import { Body, ConsoleLogger, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { Get } from "@nestjs/common/decorators";
import { Crud, CrudRequest, Override, ParsedRequest } from "@nestjsx/crud";
import { LoginMail } from "./login-mail.entity";
import { LoginMailService } from "./login-mail.service";

@Crud({
    model:{
        type: LoginMail
    },
    routes:{
        createOneBase: {
            returnShallow: false
        },
        only: ["createOneBase"],
    }
})
@Controller('LoginMail')
export class LoginMailController {
    constructor(public service : LoginMailService){}

    @Get()
    async name() {
        return {}
    }

    @Override('createOneBase')
    async confirmNewUser(
      @ParsedRequest() req: CrudRequest,
      @Body() body: LoginMail
    ) {
    
        try {

            if (!body.email){
                throw new Error("Não foi informado o email de login");                
            } 

            console.log('email válido')

        } catch (error) {
            return new HttpException(error, HttpStatus.FORBIDDEN);
        }
        
    }
}