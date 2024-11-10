import { Module } from "@nestjs/common";
import { BankTransactionModuleBase } from "./base/bankTransaction.module.base";
import { BankTransactionService } from "./bankTransaction.service";
import { BankTransactionController } from "./bankTransaction.controller";
import { BankTransactionResolver } from "./bankTransaction.resolver";

@Module({
  imports: [BankTransactionModuleBase],
  controllers: [BankTransactionController],
  providers: [BankTransactionService, BankTransactionResolver],
  exports: [BankTransactionService],
})
export class BankTransactionModule {}
