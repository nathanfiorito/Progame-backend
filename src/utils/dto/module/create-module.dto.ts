import { IsNotEmpty, IsString} from "class-validator";

export default class CreateModuleDTO {
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    supportingText: string;

    @IsNotEmpty()
    @IsString()
    image:string;
}