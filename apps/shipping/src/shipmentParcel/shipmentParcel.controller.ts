import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShipmentParcelService } from "./shipmentParcel.service";
import { ShipmentParcelControllerBase } from "./base/shipmentParcel.controller.base";

@swagger.ApiTags("shipmentParcels")
@common.Controller("shipmentParcels")
export class ShipmentParcelController extends ShipmentParcelControllerBase {
  constructor(protected readonly service: ShipmentParcelService) {
    super(service);
  }
}
