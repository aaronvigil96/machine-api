import { IsNumber, IsPositive } from "class-validator";

export class AddSpareAlternativeDto {
    @IsPositive()
    @IsNumber()
    mainSpareId: number;

    @IsNumber()
    @IsPositive()
    alternativeSpareId:number
}