import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateSpareDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({value}) => typeof value === 'string' ? value.toLowerCase() : value)
    code:string;

    @IsString()
    @IsNotEmpty()
    @Transform(({value}) => typeof value === 'string' ? value.toLowerCase() : value)
    name:string;

    @IsNumber()
    @IsPositive()
    brandId: number;
}