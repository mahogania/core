import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PackingSlipService } from "./packingSlip.service";
import { PackingSlipControllerBase } from "./base/packingSlip.controller.base";

@swagger.ApiTags("packingSlips")
@common.Controller("packingSlips")
export class PackingSlipController extends PackingSlipControllerBase {
  constructor(protected readonly service: PackingSlipService) {
    super(service);
  }
}
