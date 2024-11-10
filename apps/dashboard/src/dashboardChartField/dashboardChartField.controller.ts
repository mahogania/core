import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DashboardChartFieldService } from "./dashboardChartField.service";
import { DashboardChartFieldControllerBase } from "./base/dashboardChartField.controller.base";

@swagger.ApiTags("dashboardChartFields")
@common.Controller("dashboardChartFields")
export class DashboardChartFieldController extends DashboardChartFieldControllerBase {
  constructor(protected readonly service: DashboardChartFieldService) {
    super(service);
  }
}
