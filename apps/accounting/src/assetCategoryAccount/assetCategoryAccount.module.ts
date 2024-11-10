import { Module } from "@nestjs/common";
import { AssetCategoryAccountModuleBase } from "./base/assetCategoryAccount.module.base";
import { AssetCategoryAccountService } from "./assetCategoryAccount.service";
import { AssetCategoryAccountController } from "./assetCategoryAccount.controller";
import { AssetCategoryAccountResolver } from "./assetCategoryAccount.resolver";

@Module({
  imports: [AssetCategoryAccountModuleBase],
  controllers: [AssetCategoryAccountController],
  providers: [AssetCategoryAccountService, AssetCategoryAccountResolver],
  exports: [AssetCategoryAccountService],
})
export class AssetCategoryAccountModule {}
