import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobCardService } from "./jobCard.service";
import { JobCardControllerBase } from "./base/jobCard.controller.base";

@swagger.ApiTags("jobCards")
@common.Controller("jobCards")
export class JobCardController extends JobCardControllerBase {
  constructor(protected readonly service: JobCardService) {
    super(service);
  }
}
