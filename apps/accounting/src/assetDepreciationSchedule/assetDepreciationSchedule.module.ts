import { Module } from "@nestjs/common";
import { AssetDepreciationScheduleModuleBase } from "./base/assetDepreciationSchedule.module.base";
import { AssetDepreciationScheduleService } from "./assetDepreciationSchedule.service";
import { AssetDepreciationScheduleController } from "./assetDepreciationSchedule.controller";
import { AssetDepreciationScheduleResolver } from "./assetDepreciationSchedule.resolver";

@Module({
  imports: [AssetDepreciationScheduleModuleBase],
  controllers: [AssetDepreciationScheduleController],
  providers: [
    AssetDepreciationScheduleService,
    AssetDepreciationScheduleResolver,
  ],
  exports: [AssetDepreciationScheduleService],
})
export class AssetDepreciationScheduleModule {}
