import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActivityTypeService } from "./activityType.service";
import { ActivityTypeControllerBase } from "./base/activityType.controller.base";

@swagger.ApiTags("activityTypes")
@common.Controller("activityTypes")
export class ActivityTypeController extends ActivityTypeControllerBase {
  constructor(protected readonly service: ActivityTypeService) {
    super(service);
  }
}
