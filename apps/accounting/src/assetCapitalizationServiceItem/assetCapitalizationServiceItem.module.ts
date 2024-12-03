import { Module } from "@nestjs/common";
import { AssetCapitalizationServiceItemModuleBase } from "./base/assetCapitalizationServiceItem.module.base";
import { AssetCapitalizationServiceItemService } from "./assetCapitalizationServiceItem.service";
import { AssetCapitalizationServiceItemController } from "./assetCapitalizationServiceItem.controller";
import { AssetCapitalizationServiceItemResolver } from "./assetCapitalizationServiceItem.resolver";

@Module({
  imports: [AssetCapitalizationServiceItemModuleBase],
  controllers: [AssetCapitalizationServiceItemController],
  providers: [
    AssetCapitalizationServiceItemService,
    AssetCapitalizationServiceItemResolver,
  ],
  exports: [AssetCapitalizationServiceItemService],
})
export class AssetCapitalizationServiceItemModule {}
