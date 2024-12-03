import { Module } from "@nestjs/common";
import { AccountingPeriodModuleBase } from "./base/accountingPeriod.module.base";
import { AccountingPeriodService } from "./accountingPeriod.service";
import { AccountingPeriodController } from "./accountingPeriod.controller";
import { AccountingPeriodResolver } from "./accountingPeriod.resolver";

@Module({
  imports: [AccountingPeriodModuleBase],
  controllers: [AccountingPeriodController],
  providers: [AccountingPeriodService, AccountingPeriodResolver],
  exports: [AccountingPeriodService],
})
export class AccountingPeriodModule {}
