import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureMovementOverrideService } from "./creatureMovementOverride.service";
import { CreatureMovementOverrideGrpcControllerBase } from "./base/creatureMovementOverride.grpc.controller.base";

@swagger.ApiTags("creatureMovementOverrides")
@common.Controller("creatureMovementOverrides")
export class CreatureMovementOverrideGrpcController extends CreatureMovementOverrideGrpcControllerBase {
  constructor(protected readonly service: CreatureMovementOverrideService) {
    super(service);
  }
}
