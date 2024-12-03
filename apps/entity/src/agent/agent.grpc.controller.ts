import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgentService } from "./agent.service";
import { AgentGrpcControllerBase } from "./base/agent.grpc.controller.base";

@swagger.ApiTags("agents")
@common.Controller("agents")
export class AgentGrpcController extends AgentGrpcControllerBase {
  constructor(protected readonly service: AgentService) {
    super(service);
  }
}
