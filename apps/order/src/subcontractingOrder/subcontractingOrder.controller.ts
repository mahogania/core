import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubcontractingOrderService } from "./subcontractingOrder.service";
import { SubcontractingOrderControllerBase } from "./base/subcontractingOrder.controller.base";

@swagger.ApiTags("subcontractingOrders")
@common.Controller("subcontractingOrders")
export class SubcontractingOrderController extends SubcontractingOrderControllerBase {
  constructor(protected readonly service: SubcontractingOrderService) {
    super(service);
  }
}
