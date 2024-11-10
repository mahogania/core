import { Module } from "@nestjs/common";
import { DepreciationScheduleModuleBase } from "./base/depreciationSchedule.module.base";
import { DepreciationScheduleService } from "./depreciationSchedule.service";
import { DepreciationScheduleController } from "./depreciationSchedule.controller";
import { DepreciationScheduleResolver } from "./depreciationSchedule.resolver";

@Module({
  imports: [DepreciationScheduleModuleBase],
  controllers: [DepreciationScheduleController],
  providers: [DepreciationScheduleService, DepreciationScheduleResolver],
  exports: [DepreciationScheduleService],
})
export class DepreciationScheduleModule {}
