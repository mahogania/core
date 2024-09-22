import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventPoolResolverBase } from "./base/gameEventPool.resolver.base";
import { GameEventPool } from "./base/GameEventPool";
import { GameEventPoolService } from "./gameEventPool.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventPool)
export class GameEventPoolResolver extends GameEventPoolResolverBase {
  constructor(
    protected readonly service: GameEventPoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
