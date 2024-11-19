import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadSourceService } from "./leadSource.service";
import { LeadSourceGrpcControllerBase } from "./base/leadSource.grpc.controller.base";

@swagger.ApiTags("leadSources")
@common.Controller("leadSources")
export class LeadSourceGrpcController extends LeadSourceGrpcControllerBase {
  constructor(protected readonly service: LeadSourceService) {
    super(service);
  }
}
