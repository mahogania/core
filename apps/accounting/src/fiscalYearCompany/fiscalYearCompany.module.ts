import { Module } from "@nestjs/common";
import { FiscalYearCompanyModuleBase } from "./base/fiscalYearCompany.module.base";
import { FiscalYearCompanyService } from "./fiscalYearCompany.service";
import { FiscalYearCompanyController } from "./fiscalYearCompany.controller";
import { FiscalYearCompanyResolver } from "./fiscalYearCompany.resolver";

@Module({
  imports: [FiscalYearCompanyModuleBase],
  controllers: [FiscalYearCompanyController],
  providers: [FiscalYearCompanyService, FiscalYearCompanyResolver],
  exports: [FiscalYearCompanyService],
})
export class FiscalYearCompanyModule {}
