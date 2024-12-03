import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseOrderItemService } from "./purchaseOrderItem.service";
import { PurchaseOrderItemControllerBase } from "./base/purchaseOrderItem.controller.base";

@swagger.ApiTags("purchaseOrderItems")
@common.Controller("purchaseOrderItems")
export class PurchaseOrderItemController extends PurchaseOrderItemControllerBase {
  constructor(protected readonly service: PurchaseOrderItemService) {
    super(service);
  }
}
