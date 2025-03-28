import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import { TypeModule } from './type/type.module';
import { MachineModule } from './machine/machine.module';
import { SpareModule } from './spare/spare.module';


@Module({
  imports: [BrandModule, TypeModule, MachineModule, SpareModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
