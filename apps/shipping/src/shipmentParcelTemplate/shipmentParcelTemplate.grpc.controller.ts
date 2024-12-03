import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShipmentParcelTemplateService } from "./shipmentParcelTemplate.service";
import { ShipmentParcelTemplateGrpcControllerBase } from "./base/shipmentParcelTemplate.grpc.controller.base";

@swagger.ApiTags("shipmentParcelTemplates")
@common.Controller("shipmentParcelTemplates")
export class ShipmentParcelTemplateGrpcController extends ShipmentParcelTemplateGrpcControllerBase {
  constructor(protected readonly service: ShipmentParcelTemplateService) {
    super(service);
  }
}
