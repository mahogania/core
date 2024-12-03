import { Module } from "@nestjs/common";
import { SubcontractingOrderItemModuleBase } from "./base/subcontractingOrderItem.module.base";
import { SubcontractingOrderItemService } from "./subcontractingOrderItem.service";
import { SubcontractingOrderItemController } from "./subcontractingOrderItem.controller";
import { SubcontractingOrderItemResolver } from "./subcontractingOrderItem.resolver";

@Module({
  imports: [SubcontractingOrderItemModuleBase],
  controllers: [SubcontractingOrderItemController],
  providers: [SubcontractingOrderItemService, SubcontractingOrderItemResolver],
  exports: [SubcontractingOrderItemService],
})
export class SubcontractingOrderItemModule {}
