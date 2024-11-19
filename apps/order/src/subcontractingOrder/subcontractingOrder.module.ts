import { Module } from "@nestjs/common";
import { SubcontractingOrderModuleBase } from "./base/subcontractingOrder.module.base";
import { SubcontractingOrderService } from "./subcontractingOrder.service";
import { SubcontractingOrderController } from "./subcontractingOrder.controller";
import { SubcontractingOrderResolver } from "./subcontractingOrder.resolver";

@Module({
  imports: [SubcontractingOrderModuleBase],
  controllers: [SubcontractingOrderController],
  providers: [SubcontractingOrderService, SubcontractingOrderResolver],
  exports: [SubcontractingOrderService],
})
export class SubcontractingOrderModule {}
