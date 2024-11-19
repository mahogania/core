import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaintenanceVisitPurposeService } from "./maintenanceVisitPurpose.service";
import { MaintenanceVisitPurposeControllerBase } from "./base/maintenanceVisitPurpose.controller.base";

@swagger.ApiTags("maintenanceVisitPurposes")
@common.Controller("maintenanceVisitPurposes")
export class MaintenanceVisitPurposeController extends MaintenanceVisitPurposeControllerBase {
  constructor(protected readonly service: MaintenanceVisitPurposeService) {
    super(service);
  }
}
