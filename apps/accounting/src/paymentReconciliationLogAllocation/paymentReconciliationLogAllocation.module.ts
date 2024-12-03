import { Module } from "@nestjs/common";
import { PaymentReconciliationLogAllocationModuleBase } from "./base/paymentReconciliationLogAllocation.module.base";
import { PaymentReconciliationLogAllocationService } from "./paymentReconciliationLogAllocation.service";
import { PaymentReconciliationLogAllocationController } from "./paymentReconciliationLogAllocation.controller";
import { PaymentReconciliationLogAllocationResolver } from "./paymentReconciliationLogAllocation.resolver";

@Module({
  imports: [PaymentReconciliationLogAllocationModuleBase],
  controllers: [PaymentReconciliationLogAllocationController],
  providers: [
    PaymentReconciliationLogAllocationService,
    PaymentReconciliationLogAllocationResolver,
  ],
  exports: [PaymentReconciliationLogAllocationService],
})
export class PaymentReconciliationLogAllocationModule {}
