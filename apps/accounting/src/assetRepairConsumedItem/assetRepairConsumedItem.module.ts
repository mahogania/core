import { Module } from "@nestjs/common";
import { AssetRepairConsumedItemModuleBase } from "./base/assetRepairConsumedItem.module.base";
import { AssetRepairConsumedItemService } from "./assetRepairConsumedItem.service";
import { AssetRepairConsumedItemController } from "./assetRepairConsumedItem.controller";
import { AssetRepairConsumedItemResolver } from "./assetRepairConsumedItem.resolver";

@Module({
  imports: [AssetRepairConsumedItemModuleBase],
  controllers: [AssetRepairConsumedItemController],
  providers: [AssetRepairConsumedItemService, AssetRepairConsumedItemResolver],
  exports: [AssetRepairConsumedItemService],
})
export class AssetRepairConsumedItemModule {}
