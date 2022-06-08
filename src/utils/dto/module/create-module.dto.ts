import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from "class-validator";

export default class CreateModuleDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    supportingText: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty() 
    image:string;
}