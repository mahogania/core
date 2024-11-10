import { Module } from "@nestjs/common";
import { DashboardChartModuleBase } from "./base/dashboardChart.module.base";
import { DashboardChartService } from "./dashboardChart.service";
import { DashboardChartController } from "./dashboardChart.controller";
import { DashboardChartResolver } from "./dashboardChart.resolver";

@Module({
  imports: [DashboardChartModuleBase],
  controllers: [DashboardChartController],
  providers: [DashboardChartService, DashboardChartResolver],
  exports: [DashboardChartService],
})
export class DashboardChartModule {}
