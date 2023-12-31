import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class SignUpAuthDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}