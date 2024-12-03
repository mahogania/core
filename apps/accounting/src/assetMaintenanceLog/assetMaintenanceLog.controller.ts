import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetMaintenanceLogService } from "./assetMaintenanceLog.service";
import { AssetMaintenanceLogControllerBase } from "./base/assetMaintenanceLog.controller.base";

@swagger.ApiTags("assetMaintenanceLogs")
@common.Controller("assetMaintenanceLogs")
export class AssetMaintenanceLogController extends AssetMaintenanceLogControllerBase {
  constructor(protected readonly service: AssetMaintenanceLogService) {
    super(service);
  }
}
