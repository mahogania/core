import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerClasslevelstatsResolverBase } from "./base/playerClasslevelstats.resolver.base";
import { PlayerClasslevelstats } from "./base/PlayerClasslevelstats";
import { PlayerClasslevelstatsService } from "./playerClasslevelstats.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerClasslevelstats)
export class PlayerClasslevelstatsResolver extends PlayerClasslevelstatsResolverBase {
  constructor(
    protected readonly service: PlayerClasslevelstatsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
