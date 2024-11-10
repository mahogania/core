import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DashboardSettingsService } from "./dashboardSettings.service";
import { DashboardSettingsControllerBase } from "./base/dashboardSettings.controller.base";

@swagger.ApiTags("dashboardSettings")
@common.Controller("dashboardSettings")
export class DashboardSettingsController extends DashboardSettingsControllerBase {
  constructor(protected readonly service: DashboardSettingsService) {
    super(service);
  }
}
