import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import { TypeModule } from './type/type.module';
import { MachineModule } from './machine/machine.module';


@Module({
  imports: [BrandModule, TypeModule, MachineModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
