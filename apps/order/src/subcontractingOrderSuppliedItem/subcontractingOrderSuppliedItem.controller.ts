import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubcontractingOrderSuppliedItemService } from "./subcontractingOrderSuppliedItem.service";
import { SubcontractingOrderSuppliedItemControllerBase } from "./base/subcontractingOrderSuppliedItem.controller.base";

@swagger.ApiTags("subcontractingOrderSuppliedItems")
@common.Controller("subcontractingOrderSuppliedItems")
export class SubcontractingOrderSuppliedItemController extends SubcontractingOrderSuppliedItemControllerBase {
  constructor(
    protected readonly service: SubcontractingOrderSuppliedItemService
  ) {
    super(service);
  }
}
