import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaintenanceVisitService } from "./maintenanceVisit.service";
import { MaintenanceVisitControllerBase } from "./base/maintenanceVisit.controller.base";

@swagger.ApiTags("maintenanceVisits")
@common.Controller("maintenanceVisits")
export class MaintenanceVisitController extends MaintenanceVisitControllerBase {
  constructor(protected readonly service: MaintenanceVisitService) {
    super(service);
  }
}
