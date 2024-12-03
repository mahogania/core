import { Module } from "@nestjs/common";
import { DashboardChartFieldModuleBase } from "./base/dashboardChartField.module.base";
import { DashboardChartFieldService } from "./dashboardChartField.service";
import { DashboardChartFieldController } from "./dashboardChartField.controller";
import { DashboardChartFieldResolver } from "./dashboardChartField.resolver";

@Module({
  imports: [DashboardChartFieldModuleBase],
  controllers: [DashboardChartFieldController],
  providers: [DashboardChartFieldService, DashboardChartFieldResolver],
  exports: [DashboardChartFieldService],
})
export class DashboardChartFieldModule {}
