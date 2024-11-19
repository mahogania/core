import { Module } from "@nestjs/common";
import { PaymentReconciliationLogModuleBase } from "./base/paymentReconciliationLog.module.base";
import { PaymentReconciliationLogService } from "./paymentReconciliationLog.service";
import { PaymentReconciliationLogController } from "./paymentReconciliationLog.controller";
import { PaymentReconciliationLogResolver } from "./paymentReconciliationLog.resolver";

@Module({
  imports: [PaymentReconciliationLogModuleBase],
  controllers: [PaymentReconciliationLogController],
  providers: [
    PaymentReconciliationLogService,
    PaymentReconciliationLogResolver,
  ],
  exports: [PaymentReconciliationLogService],
})
export class PaymentReconciliationLogModule {}
