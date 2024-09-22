import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerchoiceResponseRewardService } from "./playerchoiceResponseReward.service";
import { PlayerchoiceResponseRewardGrpcControllerBase } from "./base/playerchoiceResponseReward.grpc.controller.base";

@swagger.ApiTags("playerchoiceResponseRewards")
@common.Controller("playerchoiceResponseRewards")
export class PlayerchoiceResponseRewardGrpcController extends PlayerchoiceResponseRewardGrpcControllerBase {
  constructor(protected readonly service: PlayerchoiceResponseRewardService) {
    super(service);
  }
}
