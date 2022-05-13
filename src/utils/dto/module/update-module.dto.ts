import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
import Question from "src/entities/question.entity";

export default class UpdateModuleDTO{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    supportingText: string;

    @IsNotEmpty()
    @IsString()
    image: string;
}