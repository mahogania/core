import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetMaintenanceService } from "./assetMaintenance.service";
import { AssetMaintenanceControllerBase } from "./base/assetMaintenance.controller.base";

@swagger.ApiTags("assetMaintenances")
@common.Controller("assetMaintenances")
export class AssetMaintenanceController extends AssetMaintenanceControllerBase {
  constructor(protected readonly service: AssetMaintenanceService) {
    super(service);
  }
}
