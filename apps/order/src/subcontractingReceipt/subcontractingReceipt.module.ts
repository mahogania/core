import { Module } from "@nestjs/common";
import { SubcontractingReceiptModuleBase } from "./base/subcontractingReceipt.module.base";
import { SubcontractingReceiptService } from "./subcontractingReceipt.service";
import { SubcontractingReceiptController } from "./subcontractingReceipt.controller";
import { SubcontractingReceiptResolver } from "./subcontractingReceipt.resolver";

@Module({
  imports: [SubcontractingReceiptModuleBase],
  controllers: [SubcontractingReceiptController],
  providers: [SubcontractingReceiptService, SubcontractingReceiptResolver],
  exports: [SubcontractingReceiptService],
})
export class SubcontractingReceiptModule {}
