import { Module } from "@nestjs/common";
import { CompanyHistoryModuleBase } from "./base/companyHistory.module.base";
import { CompanyHistoryService } from "./companyHistory.service";
import { CompanyHistoryController } from "./companyHistory.controller";
import { CompanyHistoryResolver } from "./companyHistory.resolver";

@Module({
  imports: [CompanyHistoryModuleBase],
  controllers: [CompanyHistoryController],
  providers: [CompanyHistoryService, CompanyHistoryResolver],
  exports: [CompanyHistoryService],
})
export class CompanyHistoryModule {}
