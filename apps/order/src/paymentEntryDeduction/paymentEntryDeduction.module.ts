import { Module } from "@nestjs/common";
import { PaymentEntryDeductionModuleBase } from "./base/paymentEntryDeduction.module.base";
import { PaymentEntryDeductionService } from "./paymentEntryDeduction.service";
import { PaymentEntryDeductionController } from "./paymentEntryDeduction.controller";
import { PaymentEntryDeductionResolver } from "./paymentEntryDeduction.resolver";

@Module({
  imports: [PaymentEntryDeductionModuleBase],
  controllers: [PaymentEntryDeductionController],
  providers: [PaymentEntryDeductionService, PaymentEntryDeductionResolver],
  exports: [PaymentEntryDeductionService],
})
export class PaymentEntryDeductionModule {}
