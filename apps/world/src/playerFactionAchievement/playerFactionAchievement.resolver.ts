import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerFactionAchievementResolverBase } from "./base/playerFactionAchievement.resolver.base";
import { PlayerFactionAchievement } from "./base/PlayerFactionAchievement";
import { PlayerFactionAchievementService } from "./playerFactionAchievement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionAchievement)
export class PlayerFactionAchievementResolver extends PlayerFactionAchievementResolverBase {
  constructor(
    protected readonly service: PlayerFactionAchievementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
