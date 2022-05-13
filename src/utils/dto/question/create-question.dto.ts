import { IsEnum, IsNotEmpty, IsNumber, IsString} from "class-validator";
import { EQuestionType } from "src/utils/enums/EQuestionType";

export default class CreateQuestionDTO {
    @IsNotEmpty()
    @IsString()
    text: string;

    @IsNotEmpty()
    @IsString()
    image:string;

    @IsString()
    correctAnswer: number;

    @IsNotEmpty()
    @IsEnum(EQuestionType)
    type: EQuestionType
}