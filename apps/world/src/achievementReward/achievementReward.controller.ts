import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AchievementRewardService } from "./achievementReward.service";
import { AchievementRewardControllerBase } from "./base/achievementReward.controller.base";

@swagger.ApiTags("achievementRewards")
@common.Controller("achievementRewards")
export class AchievementRewardController extends AchievementRewardControllerBase {
  constructor(
    protected readonly service: AchievementRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
