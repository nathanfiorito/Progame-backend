import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class SignInDTO {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @ApiProperty()
    username: string

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {message: 'senha muita fraca'})
    @ApiProperty()
    password: string;
}