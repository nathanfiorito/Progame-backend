import { IsEmail, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class SignupDbRequest {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {message: 'senha muita fraca'})
    password: string;

    @IsString()
    salt: string;

    @IsNumber()
    experience: number;
}