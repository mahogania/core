import { Module } from "@nestjs/common";
import { AssetCapitalizationStockItemModuleBase } from "./base/assetCapitalizationStockItem.module.base";
import { AssetCapitalizationStockItemService } from "./assetCapitalizationStockItem.service";
import { AssetCapitalizationStockItemController } from "./assetCapitalizationStockItem.controller";
import { AssetCapitalizationStockItemResolver } from "./assetCapitalizationStockItem.resolver";

@Module({
  imports: [AssetCapitalizationStockItemModuleBase],
  controllers: [AssetCapitalizationStockItemController],
  providers: [
    AssetCapitalizationStockItemService,
    AssetCapitalizationStockItemResolver,
  ],
  exports: [AssetCapitalizationStockItemService],
})
export class AssetCapitalizationStockItemModule {}
