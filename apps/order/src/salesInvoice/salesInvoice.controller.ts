import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesInvoiceService } from "./salesInvoice.service";
import { SalesInvoiceControllerBase } from "./base/salesInvoice.controller.base";

@swagger.ApiTags("salesInvoices")
@common.Controller("salesInvoices")
export class SalesInvoiceController extends SalesInvoiceControllerBase {
  constructor(protected readonly service: SalesInvoiceService) {
    super(service);
  }
}
