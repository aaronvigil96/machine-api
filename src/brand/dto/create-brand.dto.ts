import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBrandDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({value}) => typeof value === 'string' ? value.toLowerCase() : value)
    name: string;
}