import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesInvoiceItemService } from "./salesInvoiceItem.service";
import { SalesInvoiceItemControllerBase } from "./base/salesInvoiceItem.controller.base";

@swagger.ApiTags("salesInvoiceItems")
@common.Controller("salesInvoiceItems")
export class SalesInvoiceItemController extends SalesInvoiceItemControllerBase {
  constructor(protected readonly service: SalesInvoiceItemService) {
    super(service);
  }
}
