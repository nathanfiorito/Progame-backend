import { IsEnum, IsNotEmpty, IsNumber, IsString} from "class-validator";
import { EQuestionType } from "src/utils/enums/EQuestionType";

export default class UpdateQuestionDTO {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    text: string;

    @IsNotEmpty()
    @IsString()
    image:string;
    
    @IsNotEmpty()
    @IsString()
    correctAnswer: number;

    @IsNotEmpty()
    @IsEnum(EQuestionType)
    type: EQuestionType
}