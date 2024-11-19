import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProposalService } from "./proposal.service";
import { ProposalControllerBase } from "./base/proposal.controller.base";

@swagger.ApiTags("proposals")
@common.Controller("proposals")
export class ProposalController extends ProposalControllerBase {
  constructor(protected readonly service: ProposalService) {
    super(service);
  }
}
