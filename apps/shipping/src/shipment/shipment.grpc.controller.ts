import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShipmentService } from "./shipment.service";
import { ShipmentGrpcControllerBase } from "./base/shipment.grpc.controller.base";

@swagger.ApiTags("shipments")
@common.Controller("shipments")
export class ShipmentGrpcController extends ShipmentGrpcControllerBase {
  constructor(protected readonly service: ShipmentService) {
    super(service);
  }
}
