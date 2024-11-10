import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetMaintenanceTeamService } from "./assetMaintenanceTeam.service";
import { AssetMaintenanceTeamControllerBase } from "./base/assetMaintenanceTeam.controller.base";

@swagger.ApiTags("assetMaintenanceTeams")
@common.Controller("assetMaintenanceTeams")
export class AssetMaintenanceTeamController extends AssetMaintenanceTeamControllerBase {
  constructor(protected readonly service: AssetMaintenanceTeamService) {
    super(service);
  }
}
