import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DashboardChartSourceService } from "./dashboardChartSource.service";
import { DashboardChartSourceControllerBase } from "./base/dashboardChartSource.controller.base";

@swagger.ApiTags("dashboardChartSources")
@common.Controller("dashboardChartSources")
export class DashboardChartSourceController extends DashboardChartSourceControllerBase {
  constructor(protected readonly service: DashboardChartSourceService) {
    super(service);
  }
}
