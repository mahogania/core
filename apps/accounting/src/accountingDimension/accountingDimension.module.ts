import { Module } from "@nestjs/common";
import { AccountingDimensionModuleBase } from "./base/accountingDimension.module.base";
import { AccountingDimensionService } from "./accountingDimension.service";
import { AccountingDimensionController } from "./accountingDimension.controller";
import { AccountingDimensionResolver } from "./accountingDimension.resolver";

@Module({
  imports: [AccountingDimensionModuleBase],
  controllers: [AccountingDimensionController],
  providers: [AccountingDimensionService, AccountingDimensionResolver],
  exports: [AccountingDimensionService],
})
export class AccountingDimensionModule {}
