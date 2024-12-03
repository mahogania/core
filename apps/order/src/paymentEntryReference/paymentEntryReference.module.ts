import { Module } from "@nestjs/common";
import { PaymentEntryReferenceModuleBase } from "./base/paymentEntryReference.module.base";
import { PaymentEntryReferenceService } from "./paymentEntryReference.service";
import { PaymentEntryReferenceController } from "./paymentEntryReference.controller";
import { PaymentEntryReferenceResolver } from "./paymentEntryReference.resolver";

@Module({
  imports: [PaymentEntryReferenceModuleBase],
  controllers: [PaymentEntryReferenceController],
  providers: [PaymentEntryReferenceService, PaymentEntryReferenceResolver],
  exports: [PaymentEntryReferenceService],
})
export class PaymentEntryReferenceModule {}
