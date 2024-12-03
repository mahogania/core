import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubcontractingOrderItemService } from "./subcontractingOrderItem.service";
import { SubcontractingOrderItemControllerBase } from "./base/subcontractingOrderItem.controller.base";

@swagger.ApiTags("subcontractingOrderItems")
@common.Controller("subcontractingOrderItems")
export class SubcontractingOrderItemController extends SubcontractingOrderItemControllerBase {
  constructor(protected readonly service: SubcontractingOrderItemService) {
    super(service);
  }
}
