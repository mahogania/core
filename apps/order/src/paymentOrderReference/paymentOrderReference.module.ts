import { Module } from "@nestjs/common";
import { PaymentOrderReferenceModuleBase } from "./base/paymentOrderReference.module.base";
import { PaymentOrderReferenceService } from "./paymentOrderReference.service";
import { PaymentOrderReferenceController } from "./paymentOrderReference.controller";
import { PaymentOrderReferenceResolver } from "./paymentOrderReference.resolver";

@Module({
  imports: [PaymentOrderReferenceModuleBase],
  controllers: [PaymentOrderReferenceController],
  providers: [PaymentOrderReferenceService, PaymentOrderReferenceResolver],
  exports: [PaymentOrderReferenceService],
})
export class PaymentOrderReferenceModule {}
