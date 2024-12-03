import { Module } from "@nestjs/common";
import { AssetShiftFactorModuleBase } from "./base/assetShiftFactor.module.base";
import { AssetShiftFactorService } from "./assetShiftFactor.service";
import { AssetShiftFactorController } from "./assetShiftFactor.controller";
import { AssetShiftFactorResolver } from "./assetShiftFactor.resolver";

@Module({
  imports: [AssetShiftFactorModuleBase],
  controllers: [AssetShiftFactorController],
  providers: [AssetShiftFactorService, AssetShiftFactorResolver],
  exports: [AssetShiftFactorService],
})
export class AssetShiftFactorModule {}
