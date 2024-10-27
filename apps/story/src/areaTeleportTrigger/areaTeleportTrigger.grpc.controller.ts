import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTeleportTriggerService } from "./areaTeleportTrigger.service";
import { AreaTeleportTriggerGrpcControllerBase } from "./base/areaTeleportTrigger.grpc.controller.base";

@swagger.ApiTags("areaTeleportTriggers")
@common.Controller("areaTeleportTriggers")
export class AreaTeleportTriggerGrpcController extends AreaTeleportTriggerGrpcControllerBase {
  constructor(protected readonly service: AreaTeleportTriggerService) {
    super(service);
  }
}
