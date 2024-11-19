import { Module } from "@nestjs/common";
import { SubcontractingOrderSuppliedItemModuleBase } from "./base/subcontractingOrderSuppliedItem.module.base";
import { SubcontractingOrderSuppliedItemService } from "./subcontractingOrderSuppliedItem.service";
import { SubcontractingOrderSuppliedItemController } from "./subcontractingOrderSuppliedItem.controller";
import { SubcontractingOrderSuppliedItemResolver } from "./subcontractingOrderSuppliedItem.resolver";

@Module({
  imports: [SubcontractingOrderSuppliedItemModuleBase],
  controllers: [SubcontractingOrderSuppliedItemController],
  providers: [
    SubcontractingOrderSuppliedItemService,
    SubcontractingOrderSuppliedItemResolver,
  ],
  exports: [SubcontractingOrderSuppliedItemService],
})
export class SubcontractingOrderSuppliedItemModule {}
