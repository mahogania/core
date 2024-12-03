import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesInvoiceAdvanceService } from "./salesInvoiceAdvance.service";
import { SalesInvoiceAdvanceControllerBase } from "./base/salesInvoiceAdvance.controller.base";

@swagger.ApiTags("salesInvoiceAdvances")
@common.Controller("salesInvoiceAdvances")
export class SalesInvoiceAdvanceController extends SalesInvoiceAdvanceControllerBase {
  constructor(protected readonly service: SalesInvoiceAdvanceService) {
    super(service);
  }
}
