import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShipmentParcelTemplateService } from "./shipmentParcelTemplate.service";
import { ShipmentParcelTemplateControllerBase } from "./base/shipmentParcelTemplate.controller.base";

@swagger.ApiTags("shipmentParcelTemplates")
@common.Controller("shipmentParcelTemplates")
export class ShipmentParcelTemplateController extends ShipmentParcelTemplateControllerBase {
  constructor(protected readonly service: ShipmentParcelTemplateService) {
    super(service);
  }
}
