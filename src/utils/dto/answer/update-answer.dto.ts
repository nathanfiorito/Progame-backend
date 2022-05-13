import { IsNotEmpty, IsNumber, IsString} from "class-validator";

export default class UpdateAnswerDTO {
    @IsNotEmpty()
    @IsNumber()
    id: number;
    

    @IsNotEmpty()
    @IsString()
    text: string;
}