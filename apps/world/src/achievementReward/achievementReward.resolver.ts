import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AchievementRewardResolverBase } from "./base/achievementReward.resolver.base";
import { AchievementReward } from "./base/AchievementReward";
import { AchievementRewardService } from "./achievementReward.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AchievementReward)
export class AchievementRewardResolver extends AchievementRewardResolverBase {
  constructor(
    protected readonly service: AchievementRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
