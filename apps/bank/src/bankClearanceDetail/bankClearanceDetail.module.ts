import { Module } from "@nestjs/common";
import { BankClearanceDetailModuleBase } from "./base/bankClearanceDetail.module.base";
import { BankClearanceDetailService } from "./bankClearanceDetail.service";
import { BankClearanceDetailController } from "./bankClearanceDetail.controller";
import { BankClearanceDetailResolver } from "./bankClearanceDetail.resolver";

@Module({
  imports: [BankClearanceDetailModuleBase],
  controllers: [BankClearanceDetailController],
  providers: [BankClearanceDetailService, BankClearanceDetailResolver],
  exports: [BankClearanceDetailService],
})
export class BankClearanceDetailModule {}
