import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTriggerTeleportService } from "./areaTriggerTeleport.service";
import { AreaTriggerTeleportGrpcControllerBase } from "./base/areaTriggerTeleport.grpc.controller.base";

@swagger.ApiTags("areaTriggerTeleports")
@common.Controller("areaTriggerTeleports")
export class AreaTriggerTeleportGrpcController extends AreaTriggerTeleportGrpcControllerBase {
  constructor(protected readonly service: AreaTriggerTeleportService) {
    super(service);
  }
}
