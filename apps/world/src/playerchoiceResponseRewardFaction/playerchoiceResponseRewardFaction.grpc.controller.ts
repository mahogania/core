import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerchoiceResponseRewardFactionService } from "./playerchoiceResponseRewardFaction.service";
import { PlayerchoiceResponseRewardFactionGrpcControllerBase } from "./base/playerchoiceResponseRewardFaction.grpc.controller.base";

@swagger.ApiTags("playerchoiceResponseRewardFactions")
@common.Controller("playerchoiceResponseRewardFactions")
export class PlayerchoiceResponseRewardFactionGrpcController extends PlayerchoiceResponseRewardFactionGrpcControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardFactionService
  ) {
    super(service);
  }
}
