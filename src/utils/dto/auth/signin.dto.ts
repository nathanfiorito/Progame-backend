import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class SignInDTO {
    @IsString()
    @MinLength(4, {message: 'O campo USUARIO deve possuir no mínimo 4 caracteres'})
    @MaxLength(20, {message: 'O campo USUARIO deve possuir no maximo 8 caracteres'})
    @ApiProperty()
    username: string

    @IsString()
    @MinLength(8, {message: 'O campo SENHA deve possuir pelo mínimo 8 caracteres'})
    @MaxLength(20, {message: 'O campo SENHA deve possuir no maximo 20 caracteres'})
    @ApiProperty()
    password: string;
}