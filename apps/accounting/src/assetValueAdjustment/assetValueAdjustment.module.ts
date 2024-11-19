import { Module } from "@nestjs/common";
import { AssetValueAdjustmentModuleBase } from "./base/assetValueAdjustment.module.base";
import { AssetValueAdjustmentService } from "./assetValueAdjustment.service";
import { AssetValueAdjustmentController } from "./assetValueAdjustment.controller";
import { AssetValueAdjustmentResolver } from "./assetValueAdjustment.resolver";

@Module({
  imports: [AssetValueAdjustmentModuleBase],
  controllers: [AssetValueAdjustmentController],
  providers: [AssetValueAdjustmentService, AssetValueAdjustmentResolver],
  exports: [AssetValueAdjustmentService],
})
export class AssetValueAdjustmentModule {}
