import { Module } from "@nestjs/common";
import { DashboardChartSourceModuleBase } from "./base/dashboardChartSource.module.base";
import { DashboardChartSourceService } from "./dashboardChartSource.service";
import { DashboardChartSourceController } from "./dashboardChartSource.controller";
import { DashboardChartSourceResolver } from "./dashboardChartSource.resolver";

@Module({
  imports: [DashboardChartSourceModuleBase],
  controllers: [DashboardChartSourceController],
  providers: [DashboardChartSourceService, DashboardChartSourceResolver],
  exports: [DashboardChartSourceService],
})
export class DashboardChartSourceModule {}
