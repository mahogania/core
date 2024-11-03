import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DashboardChartService } from "./dashboardChart.service";
import { DashboardChartControllerBase } from "./base/dashboardChart.controller.base";

@swagger.ApiTags("dashboardCharts")
@common.Controller("dashboardCharts")
export class DashboardChartController extends DashboardChartControllerBase {
  constructor(protected readonly service: DashboardChartService) {
    super(service);
  }
}
