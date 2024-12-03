import { Module } from "@nestjs/common";
import { SubcontractingReceiptItemModuleBase } from "./base/subcontractingReceiptItem.module.base";
import { SubcontractingReceiptItemService } from "./subcontractingReceiptItem.service";
import { SubcontractingReceiptItemController } from "./subcontractingReceiptItem.controller";
import { SubcontractingReceiptItemResolver } from "./subcontractingReceiptItem.resolver";

@Module({
  imports: [SubcontractingReceiptItemModuleBase],
  controllers: [SubcontractingReceiptItemController],
  providers: [
    SubcontractingReceiptItemService,
    SubcontractingReceiptItemResolver,
  ],
  exports: [SubcontractingReceiptItemService],
})
export class SubcontractingReceiptItemModule {}
