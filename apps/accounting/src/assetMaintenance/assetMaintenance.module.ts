import { Module } from "@nestjs/common";
import { AssetMaintenanceModuleBase } from "./base/assetMaintenance.module.base";
import { AssetMaintenanceService } from "./assetMaintenance.service";
import { AssetMaintenanceController } from "./assetMaintenance.controller";
import { AssetMaintenanceResolver } from "./assetMaintenance.resolver";

@Module({
  imports: [AssetMaintenanceModuleBase],
  controllers: [AssetMaintenanceController],
  providers: [AssetMaintenanceService, AssetMaintenanceResolver],
  exports: [AssetMaintenanceService],
})
export class AssetMaintenanceModule {}
