import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AchievementRewardLocaleResolverBase } from "./base/achievementRewardLocale.resolver.base";
import { AchievementRewardLocale } from "./base/AchievementRewardLocale";
import { AchievementRewardLocaleService } from "./achievementRewardLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AchievementRewardLocale)
export class AchievementRewardLocaleResolver extends AchievementRewardLocaleResolverBase {
  constructor(
    protected readonly service: AchievementRewardLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
