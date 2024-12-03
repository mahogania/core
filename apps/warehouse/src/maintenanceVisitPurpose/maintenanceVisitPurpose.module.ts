import { Module } from "@nestjs/common";
import { MaintenanceVisitPurposeModuleBase } from "./base/maintenanceVisitPurpose.module.base";
import { MaintenanceVisitPurposeService } from "./maintenanceVisitPurpose.service";
import { MaintenanceVisitPurposeController } from "./maintenanceVisitPurpose.controller";
import { MaintenanceVisitPurposeResolver } from "./maintenanceVisitPurpose.resolver";

@Module({
  imports: [MaintenanceVisitPurposeModuleBase],
  controllers: [MaintenanceVisitPurposeController],
  providers: [MaintenanceVisitPurposeService, MaintenanceVisitPurposeResolver],
  exports: [MaintenanceVisitPurposeService],
})
export class MaintenanceVisitPurposeModule {}
