import { Module } from "@nestjs/common";
import { WorkOrderModuleBase } from "./base/workOrder.module.base";
import { WorkOrderService } from "./workOrder.service";
import { WorkOrderController } from "./workOrder.controller";
import { WorkOrderResolver } from "./workOrder.resolver";

@Module({
  imports: [WorkOrderModuleBase],
  controllers: [WorkOrderController],
  providers: [WorkOrderService, WorkOrderResolver],
  exports: [WorkOrderService],
})
export class WorkOrderModule {}
