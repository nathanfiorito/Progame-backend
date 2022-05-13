import { IsNotEmpty, IsString} from "class-validator";

export default class CreateAnswerDTO {
    @IsNotEmpty()
    @IsString()
    text: string;
}