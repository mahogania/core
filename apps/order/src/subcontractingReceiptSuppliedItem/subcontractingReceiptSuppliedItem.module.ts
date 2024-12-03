import { Module } from "@nestjs/common";
import { SubcontractingReceiptSuppliedItemModuleBase } from "./base/subcontractingReceiptSuppliedItem.module.base";
import { SubcontractingReceiptSuppliedItemService } from "./subcontractingReceiptSuppliedItem.service";
import { SubcontractingReceiptSuppliedItemController } from "./subcontractingReceiptSuppliedItem.controller";
import { SubcontractingReceiptSuppliedItemResolver } from "./subcontractingReceiptSuppliedItem.resolver";

@Module({
  imports: [SubcontractingReceiptSuppliedItemModuleBase],
  controllers: [SubcontractingReceiptSuppliedItemController],
  providers: [
    SubcontractingReceiptSuppliedItemService,
    SubcontractingReceiptSuppliedItemResolver,
  ],
  exports: [SubcontractingReceiptSuppliedItemService],
})
export class SubcontractingReceiptSuppliedItemModule {}
