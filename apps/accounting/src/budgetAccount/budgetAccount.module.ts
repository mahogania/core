import { Module } from "@nestjs/common";
import { BudgetAccountModuleBase } from "./base/budgetAccount.module.base";
import { BudgetAccountService } from "./budgetAccount.service";
import { BudgetAccountController } from "./budgetAccount.controller";
import { BudgetAccountResolver } from "./budgetAccount.resolver";

@Module({
  imports: [BudgetAccountModuleBase],
  controllers: [BudgetAccountController],
  providers: [BudgetAccountService, BudgetAccountResolver],
  exports: [BudgetAccountService],
})
export class BudgetAccountModule {}
