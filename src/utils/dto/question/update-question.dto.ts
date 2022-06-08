import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsString} from "class-validator";
import { EQuestionType } from "src/utils/enums/EQuestionType";

export default class UpdateQuestionDTO {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    text: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    image:string;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    correctAnswer: number;

    @IsNotEmpty()
    @IsEnum(EQuestionType)
    @ApiProperty()
    type: EQuestionType
}