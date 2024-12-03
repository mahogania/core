import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseInvoiceService } from "./purchaseInvoice.service";
import { PurchaseInvoiceControllerBase } from "./base/purchaseInvoice.controller.base";

@swagger.ApiTags("purchaseInvoices")
@common.Controller("purchaseInvoices")
export class PurchaseInvoiceController extends PurchaseInvoiceControllerBase {
  constructor(protected readonly service: PurchaseInvoiceService) {
    super(service);
  }
}
