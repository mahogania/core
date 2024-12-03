import { Module } from "@nestjs/common";
import { UnreconcilePaymentModuleBase } from "./base/unreconcilePayment.module.base";
import { UnreconcilePaymentService } from "./unreconcilePayment.service";
import { UnreconcilePaymentController } from "./unreconcilePayment.controller";
import { UnreconcilePaymentResolver } from "./unreconcilePayment.resolver";

@Module({
  imports: [UnreconcilePaymentModuleBase],
  controllers: [UnreconcilePaymentController],
  providers: [UnreconcilePaymentService, UnreconcilePaymentResolver],
  exports: [UnreconcilePaymentService],
})
export class UnreconcilePaymentModule {}
