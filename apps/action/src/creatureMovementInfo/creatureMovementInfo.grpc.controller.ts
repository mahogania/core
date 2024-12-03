import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureMovementInfoService } from "./creatureMovementInfo.service";
import { CreatureMovementInfoGrpcControllerBase } from "./base/creatureMovementInfo.grpc.controller.base";

@swagger.ApiTags("creatureMovementInfos")
@common.Controller("creatureMovementInfos")
export class CreatureMovementInfoGrpcController extends CreatureMovementInfoGrpcControllerBase {
  constructor(protected readonly service: CreatureMovementInfoService) {
    super(service);
  }
}
