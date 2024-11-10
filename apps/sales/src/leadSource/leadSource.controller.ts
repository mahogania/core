import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadSourceService } from "./leadSource.service";
import { LeadSourceControllerBase } from "./base/leadSource.controller.base";

@swagger.ApiTags("leadSources")
@common.Controller("leadSources")
export class LeadSourceController extends LeadSourceControllerBase {
  constructor(protected readonly service: LeadSourceService) {
    super(service);
  }
}
