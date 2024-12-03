import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubscriptionInvoiceService } from "./subscriptionInvoice.service";
import { SubscriptionInvoiceControllerBase } from "./base/subscriptionInvoice.controller.base";

@swagger.ApiTags("subscriptionInvoices")
@common.Controller("subscriptionInvoices")
export class SubscriptionInvoiceController extends SubscriptionInvoiceControllerBase {
  constructor(protected readonly service: SubscriptionInvoiceService) {
    super(service);
  }
}
