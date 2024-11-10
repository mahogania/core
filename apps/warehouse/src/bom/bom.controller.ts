import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomService } from "./bom.service";
import { BomControllerBase } from "./base/bom.controller.base";

@swagger.ApiTags("boms")
@common.Controller("boms")
export class BomController extends BomControllerBase {
  constructor(protected readonly service: BomService) {
    super(service);
  }
}
