import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class ModuleCreateRequest {
    @IsString()
    title: string

    @IsString()
    supportingText: string;

    @IsString()
    image:string;
}