import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventArenaSeasonsResolverBase } from "./base/gameEventArenaSeasons.resolver.base";
import { GameEventArenaSeasons } from "./base/GameEventArenaSeasons";
import { GameEventArenaSeasonsService } from "./gameEventArenaSeasons.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventArenaSeasons)
export class GameEventArenaSeasonsResolver extends GameEventArenaSeasonsResolverBase {
  constructor(
    protected readonly service: GameEventArenaSeasonsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
