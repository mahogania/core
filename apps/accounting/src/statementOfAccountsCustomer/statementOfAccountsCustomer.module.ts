import { Module } from "@nestjs/common";
import { StatementOfAccountsCustomerModuleBase } from "./base/statementOfAccountsCustomer.module.base";
import { StatementOfAccountsCustomerService } from "./statementOfAccountsCustomer.service";
import { StatementOfAccountsCustomerController } from "./statementOfAccountsCustomer.controller";
import { StatementOfAccountsCustomerResolver } from "./statementOfAccountsCustomer.resolver";

@Module({
  imports: [StatementOfAccountsCustomerModuleBase],
  controllers: [StatementOfAccountsCustomerController],
  providers: [
    StatementOfAccountsCustomerService,
    StatementOfAccountsCustomerResolver,
  ],
  exports: [StatementOfAccountsCustomerService],
})
export class StatementOfAccountsCustomerModule {}
