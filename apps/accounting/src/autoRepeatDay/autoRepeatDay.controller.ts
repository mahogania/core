import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AutoRepeatDayService } from "./autoRepeatDay.service";
import { AutoRepeatDayControllerBase } from "./base/autoRepeatDay.controller.base";

@swagger.ApiTags("autoRepeatDays")
@common.Controller("autoRepeatDays")
export class AutoRepeatDayController extends AutoRepeatDayControllerBase {
  constructor(protected readonly service: AutoRepeatDayService) {
    super(service);
  }
}
