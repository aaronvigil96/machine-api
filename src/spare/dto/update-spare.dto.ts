import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateSpareDto {
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
    machineId: number;

    @IsNumber()
    @IsPositive()
    brandId: number;
}