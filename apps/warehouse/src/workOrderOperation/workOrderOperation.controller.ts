import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkOrderOperationService } from "./workOrderOperation.service";
import { WorkOrderOperationControllerBase } from "./base/workOrderOperation.controller.base";

@swagger.ApiTags("workOrderOperations")
@common.Controller("workOrderOperations")
export class WorkOrderOperationController extends WorkOrderOperationControllerBase {
  constructor(protected readonly service: WorkOrderOperationService) {
    super(service);
  }
}
