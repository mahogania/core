import { Module } from "@nestjs/common";
import { DunningTypeModuleBase } from "./base/dunningType.module.base";
import { DunningTypeService } from "./dunningType.service";
import { DunningTypeController } from "./dunningType.controller";
import { DunningTypeResolver } from "./dunningType.resolver";

@Module({
  imports: [DunningTypeModuleBase],
  controllers: [DunningTypeController],
  providers: [DunningTypeService, DunningTypeResolver],
  exports: [DunningTypeService],
})
export class DunningTypeModule {}
