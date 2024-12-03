import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseOrderItemSuppliedService } from "./purchaseOrderItemSupplied.service";
import { PurchaseOrderItemSuppliedControllerBase } from "./base/purchaseOrderItemSupplied.controller.base";

@swagger.ApiTags("purchaseOrderItemSupplieds")
@common.Controller("purchaseOrderItemSupplieds")
export class PurchaseOrderItemSuppliedController extends PurchaseOrderItemSuppliedControllerBase {
  constructor(protected readonly service: PurchaseOrderItemSuppliedService) {
    super(service);
  }
}
