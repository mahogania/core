import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GuildRewardsReqAchievementsService } from "./guildRewardsReqAchievements.service";
import { GuildRewardsReqAchievementsControllerBase } from "./base/guildRewardsReqAchievements.controller.base";

@swagger.ApiTags("guildRewardsReqAchievements")
@common.Controller("guildRewardsReqAchievements")
export class GuildRewardsReqAchievementsController extends GuildRewardsReqAchievementsControllerBase {
  constructor(
    protected readonly service: GuildRewardsReqAchievementsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
