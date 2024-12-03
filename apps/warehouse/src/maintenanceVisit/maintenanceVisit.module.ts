import { Module } from "@nestjs/common";
import { MaintenanceVisitModuleBase } from "./base/maintenanceVisit.module.base";
import { MaintenanceVisitService } from "./maintenanceVisit.service";
import { MaintenanceVisitController } from "./maintenanceVisit.controller";
import { MaintenanceVisitResolver } from "./maintenanceVisit.resolver";

@Module({
  imports: [MaintenanceVisitModuleBase],
  controllers: [MaintenanceVisitController],
  providers: [MaintenanceVisitService, MaintenanceVisitResolver],
  exports: [MaintenanceVisitService],
})
export class MaintenanceVisitModule {}
