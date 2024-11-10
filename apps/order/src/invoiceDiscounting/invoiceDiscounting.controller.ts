import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InvoiceDiscountingService } from "./invoiceDiscounting.service";
import { InvoiceDiscountingControllerBase } from "./base/invoiceDiscounting.controller.base";

@swagger.ApiTags("invoiceDiscountings")
@common.Controller("invoiceDiscountings")
export class InvoiceDiscountingController extends InvoiceDiscountingControllerBase {
  constructor(protected readonly service: InvoiceDiscountingService) {
    super(service);
  }
}
