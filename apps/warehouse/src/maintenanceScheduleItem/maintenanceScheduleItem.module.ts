import { Module } from "@nestjs/common";
import { MaintenanceScheduleItemModuleBase } from "./base/maintenanceScheduleItem.module.base";
import { MaintenanceScheduleItemService } from "./maintenanceScheduleItem.service";
import { MaintenanceScheduleItemController } from "./maintenanceScheduleItem.controller";
import { MaintenanceScheduleItemResolver } from "./maintenanceScheduleItem.resolver";

@Module({
  imports: [MaintenanceScheduleItemModuleBase],
  controllers: [MaintenanceScheduleItemController],
  providers: [MaintenanceScheduleItemService, MaintenanceScheduleItemResolver],
  exports: [MaintenanceScheduleItemService],
})
export class MaintenanceScheduleItemModule {}
