import { Module } from "@nestjs/common";
import { AssetCapitalizationAssetItemModuleBase } from "./base/assetCapitalizationAssetItem.module.base";
import { AssetCapitalizationAssetItemService } from "./assetCapitalizationAssetItem.service";
import { AssetCapitalizationAssetItemController } from "./assetCapitalizationAssetItem.controller";
import { AssetCapitalizationAssetItemResolver } from "./assetCapitalizationAssetItem.resolver";

@Module({
  imports: [AssetCapitalizationAssetItemModuleBase],
  controllers: [AssetCapitalizationAssetItemController],
  providers: [
    AssetCapitalizationAssetItemService,
    AssetCapitalizationAssetItemResolver,
  ],
  exports: [AssetCapitalizationAssetItemService],
})
export class AssetCapitalizationAssetItemModule {}
