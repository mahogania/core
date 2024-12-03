import { Module } from "@nestjs/common";
import { FiscalYearModuleBase } from "./base/fiscalYear.module.base";
import { FiscalYearService } from "./fiscalYear.service";
import { FiscalYearController } from "./fiscalYear.controller";
import { FiscalYearResolver } from "./fiscalYear.resolver";

@Module({
  imports: [FiscalYearModuleBase],
  controllers: [FiscalYearController],
  providers: [FiscalYearService, FiscalYearResolver],
  exports: [FiscalYearService],
})
export class FiscalYearModule {}
