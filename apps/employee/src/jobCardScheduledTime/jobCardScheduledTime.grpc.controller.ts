import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobCardScheduledTimeService } from "./jobCardScheduledTime.service";
import { JobCardScheduledTimeGrpcControllerBase } from "./base/jobCardScheduledTime.grpc.controller.base";

@swagger.ApiTags("jobCardScheduledTimes")
@common.Controller("jobCardScheduledTimes")
export class JobCardScheduledTimeGrpcController extends JobCardScheduledTimeGrpcControllerBase {
  constructor(protected readonly service: JobCardScheduledTimeService) {
    super(service);
  }
}
