import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto { 
    @IsOptional()
    @Transform(({value}) => (value !== undefined ? Number(value) : undefined))
    @IsNumber()
    skip?:number;

    @IsOptional()
    @Transform(({value}) => (value !== undefined ? Number(value) : undefined))
    @IsNumber()
    @Min(1)
    take?:number;
}