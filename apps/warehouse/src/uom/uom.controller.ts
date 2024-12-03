import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UomService } from "./uom.service";
import { UomControllerBase } from "./base/uom.controller.base";

@swagger.ApiTags("uoms")
@common.Controller("uoms")
export class UomController extends UomControllerBase {
  constructor(protected readonly service: UomService) {
    super(service);
  }
}
