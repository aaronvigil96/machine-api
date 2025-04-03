import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateSpareDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @Transform(({value}) => typeof value === 'string' ? value.toLowerCase() : value)
    code:string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @Transform(({value}) => typeof value === 'string' ? value.toLowerCase() : value)
    name:string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    brandId: number;
}