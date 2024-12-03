import { Module } from "@nestjs/common";
import { AccountingDimensionDetailModuleBase } from "./base/accountingDimensionDetail.module.base";
import { AccountingDimensionDetailService } from "./accountingDimensionDetail.service";
import { AccountingDimensionDetailController } from "./accountingDimensionDetail.controller";
import { AccountingDimensionDetailResolver } from "./accountingDimensionDetail.resolver";

@Module({
  imports: [AccountingDimensionDetailModuleBase],
  controllers: [AccountingDimensionDetailController],
  providers: [
    AccountingDimensionDetailService,
    AccountingDimensionDetailResolver,
  ],
  exports: [AccountingDimensionDetailService],
})
export class AccountingDimensionDetailModule {}
