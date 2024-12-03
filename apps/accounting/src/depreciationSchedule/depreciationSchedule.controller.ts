import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepreciationScheduleService } from "./depreciationSchedule.service";
import { DepreciationScheduleControllerBase } from "./base/depreciationSchedule.controller.base";

@swagger.ApiTags("depreciationSchedules")
@common.Controller("depreciationSchedules")
export class DepreciationScheduleController extends DepreciationScheduleControllerBase {
  constructor(protected readonly service: DepreciationScheduleService) {
    super(service);
  }
}
