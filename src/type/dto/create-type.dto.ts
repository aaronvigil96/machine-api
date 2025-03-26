import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTypeDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({value}) => typeof value === 'string' ? value.toLowerCase() : value)
    name: string;
}