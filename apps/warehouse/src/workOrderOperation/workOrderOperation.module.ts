import { Module } from "@nestjs/common";
import { WorkOrderOperationModuleBase } from "./base/workOrderOperation.module.base";
import { WorkOrderOperationService } from "./workOrderOperation.service";
import { WorkOrderOperationController } from "./workOrderOperation.controller";
import { WorkOrderOperationResolver } from "./workOrderOperation.resolver";

@Module({
  imports: [WorkOrderOperationModuleBase],
  controllers: [WorkOrderOperationController],
  providers: [WorkOrderOperationService, WorkOrderOperationResolver],
  exports: [WorkOrderOperationService],
})
export class WorkOrderOperationModule {}
