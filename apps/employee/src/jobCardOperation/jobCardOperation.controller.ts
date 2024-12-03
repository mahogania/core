import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobCardOperationService } from "./jobCardOperation.service";
import { JobCardOperationControllerBase } from "./base/jobCardOperation.controller.base";

@swagger.ApiTags("jobCardOperations")
@common.Controller("jobCardOperations")
export class JobCardOperationController extends JobCardOperationControllerBase {
  constructor(protected readonly service: JobCardOperationService) {
    super(service);
  }
}
