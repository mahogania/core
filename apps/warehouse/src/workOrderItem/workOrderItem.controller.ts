import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkOrderItemService } from "./workOrderItem.service";
import { WorkOrderItemControllerBase } from "./base/workOrderItem.controller.base";

@swagger.ApiTags("workOrderItems")
@common.Controller("workOrderItems")
export class WorkOrderItemController extends WorkOrderItemControllerBase {
  constructor(protected readonly service: WorkOrderItemService) {
    super(service);
  }
}
