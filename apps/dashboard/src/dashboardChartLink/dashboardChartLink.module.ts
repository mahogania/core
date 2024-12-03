import { Module } from "@nestjs/common";
import { DashboardChartLinkModuleBase } from "./base/dashboardChartLink.module.base";
import { DashboardChartLinkService } from "./dashboardChartLink.service";
import { DashboardChartLinkController } from "./dashboardChartLink.controller";
import { DashboardChartLinkResolver } from "./dashboardChartLink.resolver";

@Module({
  imports: [DashboardChartLinkModuleBase],
  controllers: [DashboardChartLinkController],
  providers: [DashboardChartLinkService, DashboardChartLinkResolver],
  exports: [DashboardChartLinkService],
})
export class DashboardChartLinkModule {}
