import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlanketOrderService } from "./blanketOrder.service";
import { BlanketOrderControllerBase } from "./base/blanketOrder.controller.base";

@swagger.ApiTags("blanketOrders")
@common.Controller("blanketOrders")
export class BlanketOrderController extends BlanketOrderControllerBase {
  constructor(protected readonly service: BlanketOrderService) {
    super(service);
  }
}
