import { Module } from "@nestjs/common";
import { AssetMaintenanceTeamModuleBase } from "./base/assetMaintenanceTeam.module.base";
import { AssetMaintenanceTeamService } from "./assetMaintenanceTeam.service";
import { AssetMaintenanceTeamController } from "./assetMaintenanceTeam.controller";
import { AssetMaintenanceTeamResolver } from "./assetMaintenanceTeam.resolver";

@Module({
  imports: [AssetMaintenanceTeamModuleBase],
  controllers: [AssetMaintenanceTeamController],
  providers: [AssetMaintenanceTeamService, AssetMaintenanceTeamResolver],
  exports: [AssetMaintenanceTeamService],
})
export class AssetMaintenanceTeamModule {}
