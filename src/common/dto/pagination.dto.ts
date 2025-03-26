import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    
    @IsOptional()
    @IsPositive()
    @IsNumber()
    skip?:number;

    @IsNumber()
    @IsOptional()
    @IsPositive()
    @Min(1)
    take?:number;
}