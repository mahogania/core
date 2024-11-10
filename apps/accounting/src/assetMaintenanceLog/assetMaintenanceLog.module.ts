import { Module } from "@nestjs/common";
import { AssetMaintenanceLogModuleBase } from "./base/assetMaintenanceLog.module.base";
import { AssetMaintenanceLogService } from "./assetMaintenanceLog.service";
import { AssetMaintenanceLogController } from "./assetMaintenanceLog.controller";
import { AssetMaintenanceLogResolver } from "./assetMaintenanceLog.resolver";

@Module({
  imports: [AssetMaintenanceLogModuleBase],
  controllers: [AssetMaintenanceLogController],
  providers: [AssetMaintenanceLogService, AssetMaintenanceLogResolver],
  exports: [AssetMaintenanceLogService],
})
export class AssetMaintenanceLogModule {}
