import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LandedCostPurchaseReceiptService } from "./landedCostPurchaseReceipt.service";
import { LandedCostPurchaseReceiptControllerBase } from "./base/landedCostPurchaseReceipt.controller.base";

@swagger.ApiTags("landedCostPurchaseReceipts")
@common.Controller("landedCostPurchaseReceipts")
export class LandedCostPurchaseReceiptController extends LandedCostPurchaseReceiptControllerBase {
  constructor(protected readonly service: LandedCostPurchaseReceiptService) {
    super(service);
  }
}
