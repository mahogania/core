import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkOrderService } from "./workOrder.service";
import { WorkOrderControllerBase } from "./base/workOrder.controller.base";

@swagger.ApiTags("workOrders")
@common.Controller("workOrders")
export class WorkOrderController extends WorkOrderControllerBase {
  constructor(protected readonly service: WorkOrderService) {
    super(service);
  }
}
