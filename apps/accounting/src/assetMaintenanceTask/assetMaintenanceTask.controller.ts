import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetMaintenanceTaskService } from "./assetMaintenanceTask.service";
import { AssetMaintenanceTaskControllerBase } from "./base/assetMaintenanceTask.controller.base";

@swagger.ApiTags("assetMaintenanceTasks")
@common.Controller("assetMaintenanceTasks")
export class AssetMaintenanceTaskController extends AssetMaintenanceTaskControllerBase {
  constructor(protected readonly service: AssetMaintenanceTaskService) {
    super(service);
  }
}
