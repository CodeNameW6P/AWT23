import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class SignInAuthDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}