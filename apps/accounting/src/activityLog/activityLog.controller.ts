import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActivityLogService } from "./activityLog.service";
import { ActivityLogControllerBase } from "./base/activityLog.controller.base";

@swagger.ApiTags("activityLogs")
@common.Controller("activityLogs")
export class ActivityLogController extends ActivityLogControllerBase {
  constructor(protected readonly service: ActivityLogService) {
    super(service);
  }
}
