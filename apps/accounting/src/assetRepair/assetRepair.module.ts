import { Module } from "@nestjs/common";
import { AssetRepairModuleBase } from "./base/assetRepair.module.base";
import { AssetRepairService } from "./assetRepair.service";
import { AssetRepairController } from "./assetRepair.controller";
import { AssetRepairResolver } from "./assetRepair.resolver";

@Module({
  imports: [AssetRepairModuleBase],
  controllers: [AssetRepairController],
  providers: [AssetRepairService, AssetRepairResolver],
  exports: [AssetRepairService],
})
export class AssetRepairModule {}
