import { Module } from "@nestjs/common";
import { AccountingDimensionFilterModuleBase } from "./base/accountingDimensionFilter.module.base";
import { AccountingDimensionFilterService } from "./accountingDimensionFilter.service";
import { AccountingDimensionFilterController } from "./accountingDimensionFilter.controller";
import { AccountingDimensionFilterResolver } from "./accountingDimensionFilter.resolver";

@Module({
  imports: [AccountingDimensionFilterModuleBase],
  controllers: [AccountingDimensionFilterController],
  providers: [
    AccountingDimensionFilterService,
    AccountingDimensionFilterResolver,
  ],
  exports: [AccountingDimensionFilterService],
})
export class AccountingDimensionFilterModule {}
