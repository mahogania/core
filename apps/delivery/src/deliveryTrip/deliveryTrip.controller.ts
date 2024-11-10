import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryTripService } from "./deliveryTrip.service";
import { DeliveryTripControllerBase } from "./base/deliveryTrip.controller.base";

@swagger.ApiTags("deliveryTrips")
@common.Controller("deliveryTrips")
export class DeliveryTripController extends DeliveryTripControllerBase {
  constructor(protected readonly service: DeliveryTripService) {
    super(service);
  }
}
