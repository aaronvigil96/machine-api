import { IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class UpdateBrandDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({value}) => typeof value === 'string' ? value.toLowerCase() : value)
    name: string;
}