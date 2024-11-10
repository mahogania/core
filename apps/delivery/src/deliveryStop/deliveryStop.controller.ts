import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryStopService } from "./deliveryStop.service";
import { DeliveryStopControllerBase } from "./base/deliveryStop.controller.base";

@swagger.ApiTags("deliveryStops")
@common.Controller("deliveryStops")
export class DeliveryStopController extends DeliveryStopControllerBase {
  constructor(protected readonly service: DeliveryStopService) {
    super(service);
  }
}
