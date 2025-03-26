import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class UpdateMachineDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({value}) => typeof value === 'string' ? value.toLowerCase() : value)
    name:string;
    
    @IsNumber()
    @IsPositive()
    typeId:number;
    
    @IsNumber()
    @IsPositive()
    brandId:number;
}