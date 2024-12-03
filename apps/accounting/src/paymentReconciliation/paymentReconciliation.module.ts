import { Module } from "@nestjs/common";
import { PaymentReconciliationModuleBase } from "./base/paymentReconciliation.module.base";
import { PaymentReconciliationService } from "./paymentReconciliation.service";
import { PaymentReconciliationController } from "./paymentReconciliation.controller";
import { PaymentReconciliationResolver } from "./paymentReconciliation.resolver";

@Module({
  imports: [PaymentReconciliationModuleBase],
  controllers: [PaymentReconciliationController],
  providers: [PaymentReconciliationService, PaymentReconciliationResolver],
  exports: [PaymentReconciliationService],
})
export class PaymentReconciliationModule {}
