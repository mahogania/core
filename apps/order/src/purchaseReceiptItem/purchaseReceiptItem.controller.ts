import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseReceiptItemService } from "./purchaseReceiptItem.service";
import { PurchaseReceiptItemControllerBase } from "./base/purchaseReceiptItem.controller.base";

@swagger.ApiTags("purchaseReceiptItems")
@common.Controller("purchaseReceiptItems")
export class PurchaseReceiptItemController extends PurchaseReceiptItemControllerBase {
  constructor(protected readonly service: PurchaseReceiptItemService) {
    super(service);
  }
}
