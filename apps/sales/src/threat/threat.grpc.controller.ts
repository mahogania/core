import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ThreatService } from "./threat.service";
import { ThreatGrpcControllerBase } from "./base/threat.grpc.controller.base";

@swagger.ApiTags("threats")
@common.Controller("threats")
export class ThreatGrpcController extends ThreatGrpcControllerBase {
  constructor(protected readonly service: ThreatService) {
    super(service);
  }
}
