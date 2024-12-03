import { Module } from "@nestjs/common";
import { WorkOrderItemModuleBase } from "./base/workOrderItem.module.base";
import { WorkOrderItemService } from "./workOrderItem.service";
import { WorkOrderItemController } from "./workOrderItem.controller";
import { WorkOrderItemResolver } from "./workOrderItem.resolver";

@Module({
  imports: [WorkOrderItemModuleBase],
  controllers: [WorkOrderItemController],
  providers: [WorkOrderItemService, WorkOrderItemResolver],
  exports: [WorkOrderItemService],
})
export class WorkOrderItemModule {}
