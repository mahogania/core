import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobCardItemService } from "./jobCardItem.service";
import { JobCardItemGrpcControllerBase } from "./base/jobCardItem.grpc.controller.base";

@swagger.ApiTags("jobCardItems")
@common.Controller("jobCardItems")
export class JobCardItemGrpcController extends JobCardItemGrpcControllerBase {
  constructor(protected readonly service: JobCardItemService) {
    super(service);
  }
}
