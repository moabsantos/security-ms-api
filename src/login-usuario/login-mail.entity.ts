import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class LoginMail {

    @PrimaryColumn()
    email: string
}