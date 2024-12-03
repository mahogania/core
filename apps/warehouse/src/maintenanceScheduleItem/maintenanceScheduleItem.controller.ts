import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaintenanceScheduleItemService } from "./maintenanceScheduleItem.service";
import { MaintenanceScheduleItemControllerBase } from "./base/maintenanceScheduleItem.controller.base";

@swagger.ApiTags("maintenanceScheduleItems")
@common.Controller("maintenanceScheduleItems")
export class MaintenanceScheduleItemController extends MaintenanceScheduleItemControllerBase {
  constructor(protected readonly service: MaintenanceScheduleItemService) {
    super(service);
  }
}
