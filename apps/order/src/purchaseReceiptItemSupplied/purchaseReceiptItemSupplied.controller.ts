import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseReceiptItemSuppliedService } from "./purchaseReceiptItemSupplied.service";
import { PurchaseReceiptItemSuppliedControllerBase } from "./base/purchaseReceiptItemSupplied.controller.base";

@swagger.ApiTags("purchaseReceiptItemSupplieds")
@common.Controller("purchaseReceiptItemSupplieds")
export class PurchaseReceiptItemSuppliedController extends PurchaseReceiptItemSuppliedControllerBase {
  constructor(protected readonly service: PurchaseReceiptItemSuppliedService) {
    super(service);
  }
}
