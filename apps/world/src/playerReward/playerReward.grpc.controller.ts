import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerRewardService } from "./playerReward.service";
import { PlayerRewardGrpcControllerBase } from "./base/playerReward.grpc.controller.base";

@swagger.ApiTags("playerRewards")
@common.Controller("playerRewards")
export class PlayerRewardGrpcController extends PlayerRewardGrpcControllerBase {
  constructor(protected readonly service: PlayerRewardService) {
    super(service);
  }
}
