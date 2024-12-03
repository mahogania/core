import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventGameObjectResolverBase } from "./base/gameEventGameObject.resolver.base";
import { GameEventGameObject } from "./base/GameEventGameObject";
import { GameEventGameObjectService } from "./gameEventGameObject.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventGameObject)
export class GameEventGameObjectResolver extends GameEventGameObjectResolverBase {
  constructor(
    protected readonly service: GameEventGameObjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
