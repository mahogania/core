import { Module } from "@nestjs/common";
import { LedgerHealthMonitorCompanyModuleBase } from "./base/ledgerHealthMonitorCompany.module.base";
import { LedgerHealthMonitorCompanyService } from "./ledgerHealthMonitorCompany.service";
import { LedgerHealthMonitorCompanyController } from "./ledgerHealthMonitorCompany.controller";
import { LedgerHealthMonitorCompanyResolver } from "./ledgerHealthMonitorCompany.resolver";

@Module({
  imports: [LedgerHealthMonitorCompanyModuleBase],
  controllers: [LedgerHealthMonitorCompanyController],
  providers: [
    LedgerHealthMonitorCompanyService,
    LedgerHealthMonitorCompanyResolver,
  ],
  exports: [LedgerHealthMonitorCompanyService],
})
export class LedgerHealthMonitorCompanyModule {}
