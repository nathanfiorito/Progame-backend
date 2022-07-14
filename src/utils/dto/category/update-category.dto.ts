import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString} from "class-validator";

export default class UpdateCategoryDTO {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    id: number;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    text: string;
}