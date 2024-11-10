import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameObjectOverridesResolverBase } from "./base/gameObjectOverrides.resolver.base";
import { GameObjectOverrides } from "./base/GameObjectOverrides";
import { GameObjectOverridesService } from "./gameObjectOverrides.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectOverrides)
export class GameObjectOverridesResolver extends GameObjectOverridesResolverBase {
  constructor(
    protected readonly service: GameObjectOverridesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
