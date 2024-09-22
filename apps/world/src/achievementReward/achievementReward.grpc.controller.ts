import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AchievementRewardService } from "./achievementReward.service";
import { AchievementRewardGrpcControllerBase } from "./base/achievementReward.grpc.controller.base";

@swagger.ApiTags("achievementRewards")
@common.Controller("achievementRewards")
export class AchievementRewardGrpcController extends AchievementRewardGrpcControllerBase {
  constructor(protected readonly service: AchievementRewardService) {
    super(service);
  }
}
