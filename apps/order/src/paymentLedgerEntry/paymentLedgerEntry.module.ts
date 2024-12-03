import { Module } from "@nestjs/common";
import { PaymentLedgerEntryModuleBase } from "./base/paymentLedgerEntry.module.base";
import { PaymentLedgerEntryService } from "./paymentLedgerEntry.service";
import { PaymentLedgerEntryController } from "./paymentLedgerEntry.controller";
import { PaymentLedgerEntryResolver } from "./paymentLedgerEntry.resolver";

@Module({
  imports: [PaymentLedgerEntryModuleBase],
  controllers: [PaymentLedgerEntryController],
  providers: [PaymentLedgerEntryService, PaymentLedgerEntryResolver],
  exports: [PaymentLedgerEntryService],
})
export class PaymentLedgerEntryModule {}
