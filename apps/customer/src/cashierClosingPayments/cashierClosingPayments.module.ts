import { Module } from "@nestjs/common";
import { CashierClosingPaymentsModuleBase } from "./base/cashierClosingPayments.module.base";
import { CashierClosingPaymentsService } from "./cashierClosingPayments.service";
import { CashierClosingPaymentsController } from "./cashierClosingPayments.controller";
import { CashierClosingPaymentsResolver } from "./cashierClosingPayments.resolver";

@Module({
  imports: [CashierClosingPaymentsModuleBase],
  controllers: [CashierClosingPaymentsController],
  providers: [CashierClosingPaymentsService, CashierClosingPaymentsResolver],
  exports: [CashierClosingPaymentsService],
})
export class CashierClosingPaymentsModule {}
