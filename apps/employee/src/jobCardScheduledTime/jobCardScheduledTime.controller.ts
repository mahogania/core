import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobCardScheduledTimeService } from "./jobCardScheduledTime.service";
import { JobCardScheduledTimeControllerBase } from "./base/jobCardScheduledTime.controller.base";

@swagger.ApiTags("jobCardScheduledTimes")
@common.Controller("jobCardScheduledTimes")
export class JobCardScheduledTimeController extends JobCardScheduledTimeControllerBase {
  constructor(protected readonly service: JobCardScheduledTimeService) {
    super(service);
  }
}
