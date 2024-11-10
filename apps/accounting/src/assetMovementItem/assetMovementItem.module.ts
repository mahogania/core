import { Module } from "@nestjs/common";
import { AssetMovementItemModuleBase } from "./base/assetMovementItem.module.base";
import { AssetMovementItemService } from "./assetMovementItem.service";
import { AssetMovementItemController } from "./assetMovementItem.controller";
import { AssetMovementItemResolver } from "./assetMovementItem.resolver";

@Module({
  imports: [AssetMovementItemModuleBase],
  controllers: [AssetMovementItemController],
  providers: [AssetMovementItemService, AssetMovementItemResolver],
  exports: [AssetMovementItemService],
})
export class AssetMovementItemModule {}
