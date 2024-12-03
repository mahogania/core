import { Module } from "@nestjs/common";
import { SalesInvoiceTimesheetModuleBase } from "./base/salesInvoiceTimesheet.module.base";
import { SalesInvoiceTimesheetService } from "./salesInvoiceTimesheet.service";
import { SalesInvoiceTimesheetController } from "./salesInvoiceTimesheet.controller";
import { SalesInvoiceTimesheetResolver } from "./salesInvoiceTimesheet.resolver";

@Module({
  imports: [SalesInvoiceTimesheetModuleBase],
  controllers: [SalesInvoiceTimesheetController],
  providers: [SalesInvoiceTimesheetService, SalesInvoiceTimesheetResolver],
  exports: [SalesInvoiceTimesheetService],
})
export class SalesInvoiceTimesheetModule {}
