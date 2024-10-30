import { Module } from "@nestjs/common";
import { AccountClosingBalanceModuleBase } from "./base/accountClosingBalance.module.base";
import { AccountClosingBalanceService } from "./accountClosingBalance.service";
import { AccountClosingBalanceController } from "./accountClosingBalance.controller";
import { AccountClosingBalanceResolver } from "./accountClosingBalance.resolver";

@Module({
  imports: [AccountClosingBalanceModuleBase],
  controllers: [AccountClosingBalanceController],
  providers: [AccountClosingBalanceService, AccountClosingBalanceResolver],
  exports: [AccountClosingBalanceService],
})
export class AccountClosingBalanceModule {}
