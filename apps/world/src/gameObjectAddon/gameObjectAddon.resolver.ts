import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameObjectAddonResolverBase } from "./base/gameObjectAddon.resolver.base";
import { GameObjectAddon } from "./base/GameObjectAddon";
import { GameObjectAddonService } from "./gameObjectAddon.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectAddon)
export class GameObjectAddonResolver extends GameObjectAddonResolverBase {
  constructor(
    protected readonly service: GameObjectAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
