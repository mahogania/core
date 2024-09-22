import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerRacestatsResolverBase } from "./base/playerRacestats.resolver.base";
import { PlayerRacestats } from "./base/PlayerRacestats";
import { PlayerRacestatsService } from "./playerRacestats.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerRacestats)
export class PlayerRacestatsResolver extends PlayerRacestatsResolverBase {
  constructor(
    protected readonly service: PlayerRacestatsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
