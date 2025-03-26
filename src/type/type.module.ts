import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { TypeController } from "./type.controller";
import { TypeService } from "./type.service";

@Module({
    imports: [PrismaModule],
    controllers: [TypeController],
    providers: [TypeService]
})
export class TypeModule {

}