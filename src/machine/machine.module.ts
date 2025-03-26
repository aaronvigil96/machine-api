import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { MachineController } from "./machine.controller";
import { MachineService } from "./machine.service";

@Module({
    imports: [PrismaModule],
    controllers: [MachineController],
    providers: [MachineService]
})
export class MachineModule {

}