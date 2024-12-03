import { Module } from "@nestjs/common";
import { ProductBundleItemModuleBase } from "./base/productBundleItem.module.base";
import { ProductBundleItemService } from "./productBundleItem.service";
import { ProductBundleItemController } from "./productBundleItem.controller";
import { ProductBundleItemResolver } from "./productBundleItem.resolver";

@Module({
  imports: [ProductBundleItemModuleBase],
  controllers: [ProductBundleItemController],
  providers: [ProductBundleItemService, ProductBundleItemResolver],
  exports: [ProductBundleItemService],
})
export class ProductBundleItemModule {}
