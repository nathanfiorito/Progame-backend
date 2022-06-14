import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Match } from "../../decorators/match.decorator";

export class SignUpDTO {
    @IsString()
    @MinLength(4, {message: 'O campo USUARIO deve possuir no mínimo 4 caracteres'})
    @MaxLength(20, {message: 'O campo USUARIO deve possuir no maximo 8 caracteres'})
    @ApiProperty()
    username: string

    @IsString()
    @IsEmail({message: 'E-mail inválido.'})
    @ApiProperty()
    email: string

    @IsString()
    @MinLength(8, {message: 'O campo SENHA deve possuir pelo mínimo 8 caracteres'})
    @MaxLength(20, {message: 'O campo SENHA deve possuir no maximo 20 caracteres'})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {message: 'Senha muito fraca.'})
    @ApiProperty()
    password: string;

    @IsString()
    @MinLength(8, {message: 'O campo SENHA deve possuir pelo mínimo 8 caracteres'})
    @MaxLength(20, {message: 'O campo SENHA deve possuir no maximo 20 caracteres'})
    @Match('password',
    {message: 'As senhas não são iguais.'})
    @ApiProperty()
    passwordConfirm: string
}