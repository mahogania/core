import { Module } from "@nestjs/common";
import { AssetCapitalizationModuleBase } from "./base/assetCapitalization.module.base";
import { AssetCapitalizationService } from "./assetCapitalization.service";
import { AssetCapitalizationController } from "./assetCapitalization.controller";
import { AssetCapitalizationResolver } from "./assetCapitalization.resolver";

@Module({
  imports: [AssetCapitalizationModuleBase],
  controllers: [AssetCapitalizationController],
  providers: [AssetCapitalizationService, AssetCapitalizationResolver],
  exports: [AssetCapitalizationService],
})
export class AssetCapitalizationModule {}
