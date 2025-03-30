import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class PaginationQueryDto { 
    @IsOptional()
    @Transform(({value}) => (value !== undefined ? Number(value) : undefined))
    @IsNumber()
    skip?:number;

    @IsOptional()
    @Transform(({value}) => (value !== undefined ? Number(value) : undefined))
    @IsNumber()
    @Min(1)
    take?:number;

    @IsString()
    @IsNotEmpty()
    query:string;
}