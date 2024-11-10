import { Module } from "@nestjs/common";
import { DashboardSettingsModuleBase } from "./base/dashboardSettings.module.base";
import { DashboardSettingsService } from "./dashboardSettings.service";
import { DashboardSettingsController } from "./dashboardSettings.controller";
import { DashboardSettingsResolver } from "./dashboardSettings.resolver";

@Module({
  imports: [DashboardSettingsModuleBase],
  controllers: [DashboardSettingsController],
  providers: [DashboardSettingsService, DashboardSettingsResolver],
  exports: [DashboardSettingsService],
})
export class DashboardSettingsModule {}
