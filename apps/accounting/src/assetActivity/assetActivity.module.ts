import { Module } from "@nestjs/common";
import { AssetActivityModuleBase } from "./base/assetActivity.module.base";
import { AssetActivityService } from "./assetActivity.service";
import { AssetActivityController } from "./assetActivity.controller";
import { AssetActivityResolver } from "./assetActivity.resolver";

@Module({
  imports: [AssetActivityModuleBase],
  controllers: [AssetActivityController],
  providers: [AssetActivityService, AssetActivityResolver],
  exports: [AssetActivityService],
})
export class AssetActivityModule {}
