import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesInvoiceTimesheetService } from "./salesInvoiceTimesheet.service";
import { SalesInvoiceTimesheetControllerBase } from "./base/salesInvoiceTimesheet.controller.base";

@swagger.ApiTags("salesInvoiceTimesheets")
@common.Controller("salesInvoiceTimesheets")
export class SalesInvoiceTimesheetController extends SalesInvoiceTimesheetControllerBase {
  constructor(protected readonly service: SalesInvoiceTimesheetService) {
    super(service);
  }
}
