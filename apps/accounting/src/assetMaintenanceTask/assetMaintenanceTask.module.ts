import { Module } from "@nestjs/common";
import { AssetMaintenanceTaskModuleBase } from "./base/assetMaintenanceTask.module.base";
import { AssetMaintenanceTaskService } from "./assetMaintenanceTask.service";
import { AssetMaintenanceTaskController } from "./assetMaintenanceTask.controller";
import { AssetMaintenanceTaskResolver } from "./assetMaintenanceTask.resolver";

@Module({
  imports: [AssetMaintenanceTaskModuleBase],
  controllers: [AssetMaintenanceTaskController],
  providers: [AssetMaintenanceTaskService, AssetMaintenanceTaskResolver],
  exports: [AssetMaintenanceTaskService],
})
export class AssetMaintenanceTaskModule {}
