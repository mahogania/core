import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProposalService } from "./proposal.service";
import { ProposalGrpcControllerBase } from "./base/proposal.grpc.controller.base";

@swagger.ApiTags("proposals")
@common.Controller("proposals")
export class ProposalGrpcController extends ProposalGrpcControllerBase {
  constructor(protected readonly service: ProposalService) {
    super(service);
  }
}
