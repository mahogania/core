import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesInvoicePaymentService } from "./salesInvoicePayment.service";
import { SalesInvoicePaymentControllerBase } from "./base/salesInvoicePayment.controller.base";

@swagger.ApiTags("salesInvoicePayments")
@common.Controller("salesInvoicePayments")
export class SalesInvoicePaymentController extends SalesInvoicePaymentControllerBase {
  constructor(protected readonly service: SalesInvoicePaymentService) {
    super(service);
  }
}
