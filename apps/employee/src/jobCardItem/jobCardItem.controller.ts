import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobCardItemService } from "./jobCardItem.service";
import { JobCardItemControllerBase } from "./base/jobCardItem.controller.base";

@swagger.ApiTags("jobCardItems")
@common.Controller("jobCardItems")
export class JobCardItemController extends JobCardItemControllerBase {
  constructor(protected readonly service: JobCardItemService) {
    super(service);
  }
}
