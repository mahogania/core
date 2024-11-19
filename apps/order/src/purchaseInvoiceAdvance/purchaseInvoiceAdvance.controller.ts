import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseInvoiceAdvanceService } from "./purchaseInvoiceAdvance.service";
import { PurchaseInvoiceAdvanceControllerBase } from "./base/purchaseInvoiceAdvance.controller.base";

@swagger.ApiTags("purchaseInvoiceAdvances")
@common.Controller("purchaseInvoiceAdvances")
export class PurchaseInvoiceAdvanceController extends PurchaseInvoiceAdvanceControllerBase {
  constructor(protected readonly service: PurchaseInvoiceAdvanceService) {
    super(service);
  }
}
