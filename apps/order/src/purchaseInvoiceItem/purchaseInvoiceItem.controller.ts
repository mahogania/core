import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseInvoiceItemService } from "./purchaseInvoiceItem.service";
import { PurchaseInvoiceItemControllerBase } from "./base/purchaseInvoiceItem.controller.base";

@swagger.ApiTags("purchaseInvoiceItems")
@common.Controller("purchaseInvoiceItems")
export class PurchaseInvoiceItemController extends PurchaseInvoiceItemControllerBase {
  constructor(protected readonly service: PurchaseInvoiceItemService) {
    super(service);
  }
}
