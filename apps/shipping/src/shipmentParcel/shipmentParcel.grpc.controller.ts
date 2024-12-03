import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShipmentParcelService } from "./shipmentParcel.service";
import { ShipmentParcelGrpcControllerBase } from "./base/shipmentParcel.grpc.controller.base";

@swagger.ApiTags("shipmentParcels")
@common.Controller("shipmentParcels")
export class ShipmentParcelGrpcController extends ShipmentParcelGrpcControllerBase {
  constructor(protected readonly service: ShipmentParcelService) {
    super(service);
  }
}
