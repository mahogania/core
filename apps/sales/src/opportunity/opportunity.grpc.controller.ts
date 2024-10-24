import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OpportunityService } from "./opportunity.service";
import { OpportunityGrpcControllerBase } from "./base/opportunity.grpc.controller.base";

@swagger.ApiTags("opportunities")
@common.Controller("opportunities")
export class OpportunityGrpcController extends OpportunityGrpcControllerBase {
  constructor(protected readonly service: OpportunityService) {
    super(service);
  }
}
