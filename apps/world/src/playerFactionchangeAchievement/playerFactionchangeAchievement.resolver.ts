import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerFactionchangeAchievementResolverBase } from "./base/playerFactionchangeAchievement.resolver.base";
import { PlayerFactionchangeAchievement } from "./base/PlayerFactionchangeAchievement";
import { PlayerFactionchangeAchievementService } from "./playerFactionchangeAchievement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionchangeAchievement)
export class PlayerFactionchangeAchievementResolver extends PlayerFactionchangeAchievementResolverBase {
  constructor(
    protected readonly service: PlayerFactionchangeAchievementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
