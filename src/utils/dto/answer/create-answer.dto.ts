import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from "class-validator";

export default class CreateAnswerDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    text: string;
}