import { Module } from "@nestjs/common";
import { BankTransactionPaymentsModuleBase } from "./base/bankTransactionPayments.module.base";
import { BankTransactionPaymentsService } from "./bankTransactionPayments.service";
import { BankTransactionPaymentsController } from "./bankTransactionPayments.controller";
import { BankTransactionPaymentsResolver } from "./bankTransactionPayments.resolver";

@Module({
  imports: [BankTransactionPaymentsModuleBase],
  controllers: [BankTransactionPaymentsController],
  providers: [BankTransactionPaymentsService, BankTransactionPaymentsResolver],
  exports: [BankTransactionPaymentsService],
})
export class BankTransactionPaymentsModule {}
