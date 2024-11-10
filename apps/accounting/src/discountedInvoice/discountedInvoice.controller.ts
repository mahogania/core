import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscountedInvoiceService } from "./discountedInvoice.service";
import { DiscountedInvoiceControllerBase } from "./base/discountedInvoice.controller.base";

@swagger.ApiTags("discountedInvoices")
@common.Controller("discountedInvoices")
export class DiscountedInvoiceController extends DiscountedInvoiceControllerBase {
  constructor(protected readonly service: DiscountedInvoiceService) {
    super(service);
  }
}
