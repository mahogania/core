import { Module } from "@nestjs/common";
import { BankAccountModuleBase } from "./base/bankAccount.module.base";
import { BankAccountService } from "./bankAccount.service";
import { BankAccountController } from "./bankAccount.controller";
import { BankAccountResolver } from "./bankAccount.resolver";

@Module({
  imports: [BankAccountModuleBase],
  controllers: [BankAccountController],
  providers: [BankAccountService, BankAccountResolver],
  exports: [BankAccountService],
})
export class BankAccountModule {}
