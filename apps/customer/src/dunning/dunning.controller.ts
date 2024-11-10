import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DunningService } from "./dunning.service";
import { DunningControllerBase } from "./base/dunning.controller.base";

@swagger.ApiTags("dunnings")
@common.Controller("dunnings")
export class DunningController extends DunningControllerBase {
  constructor(protected readonly service: DunningService) {
    super(service);
  }
}
