import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DashboardChartLinkService } from "./dashboardChartLink.service";
import { DashboardChartLinkControllerBase } from "./base/dashboardChartLink.controller.base";

@swagger.ApiTags("dashboardChartLinks")
@common.Controller("dashboardChartLinks")
export class DashboardChartLinkController extends DashboardChartLinkControllerBase {
  constructor(protected readonly service: DashboardChartLinkService) {
    super(service);
  }
}
