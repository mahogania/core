import { Module } from "@nestjs/common";
import { AutoEmailReportModuleBase } from "./base/autoEmailReport.module.base";
import { AutoEmailReportService } from "./autoEmailReport.service";
import { AutoEmailReportController } from "./autoEmailReport.controller";
import { AutoEmailReportResolver } from "./autoEmailReport.resolver";

@Module({
  imports: [AutoEmailReportModuleBase],
  controllers: [AutoEmailReportController],
  providers: [AutoEmailReportService, AutoEmailReportResolver],
  exports: [AutoEmailReportService],
})
export class AutoEmailReportModule {}
