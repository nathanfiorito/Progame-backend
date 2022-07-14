import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from "class-validator";

export default class CreateCategoryDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string;
}