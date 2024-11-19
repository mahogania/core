import { Module } from "@nestjs/common";
import { StatementOfAccountsModuleBase } from "./base/statementOfAccounts.module.base";
import { StatementOfAccountsService } from "./statementOfAccounts.service";
import { StatementOfAccountsController } from "./statementOfAccounts.controller";
import { StatementOfAccountsResolver } from "./statementOfAccounts.resolver";

@Module({
  imports: [StatementOfAccountsModuleBase],
  controllers: [StatementOfAccountsController],
  providers: [StatementOfAccountsService, StatementOfAccountsResolver],
  exports: [StatementOfAccountsService],
})
export class StatementOfAccountsModule {}
