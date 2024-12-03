import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DunningTypeService } from "./dunningType.service";
import { DunningTypeControllerBase } from "./base/dunningType.controller.base";

@swagger.ApiTags("dunningTypes")
@common.Controller("dunningTypes")
export class DunningTypeController extends DunningTypeControllerBase {
  constructor(protected readonly service: DunningTypeService) {
    super(service);
  }
}
