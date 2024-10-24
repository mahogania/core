import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WeaknessService } from "./weakness.service";
import { WeaknessControllerBase } from "./base/weakness.controller.base";

@swagger.ApiTags("weaknesses")
@common.Controller("weaknesses")
export class WeaknessController extends WeaknessControllerBase {
  constructor(protected readonly service: WeaknessService) {
    super(service);
  }
}
