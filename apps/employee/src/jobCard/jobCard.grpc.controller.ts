import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobCardService } from "./jobCard.service";
import { JobCardGrpcControllerBase } from "./base/jobCard.grpc.controller.base";

@swagger.ApiTags("jobCards")
@common.Controller("jobCards")
export class JobCardGrpcController extends JobCardGrpcControllerBase {
  constructor(protected readonly service: JobCardService) {
    super(service);
  }
}
