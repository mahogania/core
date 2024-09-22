import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GuildRewardsReqAchievementsService } from "./guildRewardsReqAchievements.service";
import { GuildRewardsReqAchievementsGrpcControllerBase } from "./base/guildRewardsReqAchievements.grpc.controller.base";

@swagger.ApiTags("guildRewardsReqAchievements")
@common.Controller("guildRewardsReqAchievements")
export class GuildRewardsReqAchievementsGrpcController extends GuildRewardsReqAchievementsGrpcControllerBase {
  constructor(protected readonly service: GuildRewardsReqAchievementsService) {
    super(service);
  }
}
