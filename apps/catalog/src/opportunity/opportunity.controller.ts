import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OpportunityService } from "./opportunity.service";
import { OpportunityControllerBase } from "./base/opportunity.controller.base";

@swagger.ApiTags("opportunities")
@common.Controller("opportunities")
export class OpportunityController extends OpportunityControllerBase {
  constructor(protected readonly service: OpportunityService) {
    super(service);
  }
}
