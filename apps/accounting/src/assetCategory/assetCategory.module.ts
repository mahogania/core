import { Module } from "@nestjs/common";
import { AssetCategoryModuleBase } from "./base/assetCategory.module.base";
import { AssetCategoryService } from "./assetCategory.service";
import { AssetCategoryController } from "./assetCategory.controller";
import { AssetCategoryResolver } from "./assetCategory.resolver";

@Module({
  imports: [AssetCategoryModuleBase],
  controllers: [AssetCategoryController],
  providers: [AssetCategoryService, AssetCategoryResolver],
  exports: [AssetCategoryService],
})
export class AssetCategoryModule {}
