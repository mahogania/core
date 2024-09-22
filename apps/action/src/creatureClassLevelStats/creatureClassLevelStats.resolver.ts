import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureClassLevelStatsResolverBase } from "./base/creatureClassLevelStats.resolver.base";
import { CreatureClassLevelStats } from "./base/CreatureClassLevelStats";
import { CreatureClassLevelStatsService } from "./creatureClassLevelStats.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureClassLevelStats)
export class CreatureClassLevelStatsResolver extends CreatureClassLevelStatsResolverBase {
  constructor(
    protected readonly service: CreatureClassLevelStatsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
