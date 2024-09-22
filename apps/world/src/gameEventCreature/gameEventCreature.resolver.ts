import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventCreatureResolverBase } from "./base/gameEventCreature.resolver.base";
import { GameEventCreature } from "./base/GameEventCreature";
import { GameEventCreatureService } from "./gameEventCreature.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventCreature)
export class GameEventCreatureResolver extends GameEventCreatureResolverBase {
  constructor(
    protected readonly service: GameEventCreatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
