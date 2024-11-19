import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerXpForLevelService } from "./playerXpForLevel.service";
import { PlayerXpForLevelGrpcControllerBase } from "./base/playerXpForLevel.grpc.controller.base";

@swagger.ApiTags("playerXpForLevels")
@common.Controller("playerXpForLevels")
export class PlayerXpForLevelGrpcController extends PlayerXpForLevelGrpcControllerBase {
  constructor(protected readonly service: PlayerXpForLevelService) {
    super(service);
  }
}
