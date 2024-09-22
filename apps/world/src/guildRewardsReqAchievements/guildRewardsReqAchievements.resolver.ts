import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GuildRewardsReqAchievementsResolverBase } from "./base/guildRewardsReqAchievements.resolver.base";
import { GuildRewardsReqAchievements } from "./base/GuildRewardsReqAchievements";
import { GuildRewardsReqAchievementsService } from "./guildRewardsReqAchievements.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GuildRewardsReqAchievements)
export class GuildRewardsReqAchievementsResolver extends GuildRewardsReqAchievementsResolverBase {
  constructor(
    protected readonly service: GuildRewardsReqAchievementsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
