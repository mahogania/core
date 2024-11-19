import { Module } from "@nestjs/common";
import { PaymentEntryModuleBase } from "./base/paymentEntry.module.base";
import { PaymentEntryService } from "./paymentEntry.service";
import { PaymentEntryController } from "./paymentEntry.controller";
import { PaymentEntryResolver } from "./paymentEntry.resolver";

@Module({
  imports: [PaymentEntryModuleBase],
  controllers: [PaymentEntryController],
  providers: [PaymentEntryService, PaymentEntryResolver],
  exports: [PaymentEntryService],
})
export class PaymentEntryModule {}
