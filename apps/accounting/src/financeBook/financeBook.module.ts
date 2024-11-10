import { Module } from "@nestjs/common";
import { FinanceBookModuleBase } from "./base/financeBook.module.base";
import { FinanceBookService } from "./financeBook.service";
import { FinanceBookController } from "./financeBook.controller";
import { FinanceBookResolver } from "./financeBook.resolver";

@Module({
  imports: [FinanceBookModuleBase],
  controllers: [FinanceBookController],
  providers: [FinanceBookService, FinanceBookResolver],
  exports: [FinanceBookService],
})
export class FinanceBookModule {}
