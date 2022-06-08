import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
import Question from "src/entities/question.entity";

export default class UpdateModuleDTO{
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    supportingText: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()    
    image: string;
}