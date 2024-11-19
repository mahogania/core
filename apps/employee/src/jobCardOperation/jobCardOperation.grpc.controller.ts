import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobCardOperationService } from "./jobCardOperation.service";
import { JobCardOperationGrpcControllerBase } from "./base/jobCardOperation.grpc.controller.base";

@swagger.ApiTags("jobCardOperations")
@common.Controller("jobCardOperations")
export class JobCardOperationGrpcController extends JobCardOperationGrpcControllerBase {
  constructor(protected readonly service: JobCardOperationService) {
    super(service);
  }
}
