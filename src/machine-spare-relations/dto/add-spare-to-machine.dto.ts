import { IsNumber, IsPositive } from "class-validator";

export class AddSpareToMachineDto {
    @IsNumber()
    @IsPositive()
    spareId:number;

    @IsNumber()
    @IsPositive()
    machineId:number;
}