import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventNpcFlagResolverBase } from "./base/gameEventNpcFlag.resolver.base";
import { GameEventNpcFlag } from "./base/GameEventNpcFlag";
import { GameEventNpcFlagService } from "./gameEventNpcFlag.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventNpcFlag)
export class GameEventNpcFlagResolver extends GameEventNpcFlagResolverBase {
  constructor(
    protected readonly service: GameEventNpcFlagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
