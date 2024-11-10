import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlanketOrderItemService } from "./blanketOrderItem.service";
import { BlanketOrderItemControllerBase } from "./base/blanketOrderItem.controller.base";

@swagger.ApiTags("blanketOrderItems")
@common.Controller("blanketOrderItems")
export class BlanketOrderItemController extends BlanketOrderItemControllerBase {
  constructor(protected readonly service: BlanketOrderItemService) {
    super(service);
  }
}
