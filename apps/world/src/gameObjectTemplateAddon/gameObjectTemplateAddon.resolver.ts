import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameObjectTemplateAddonResolverBase } from "./base/gameObjectTemplateAddon.resolver.base";
import { GameObjectTemplateAddon } from "./base/GameObjectTemplateAddon";
import { GameObjectTemplateAddonService } from "./gameObjectTemplateAddon.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectTemplateAddon)
export class GameObjectTemplateAddonResolver extends GameObjectTemplateAddonResolverBase {
  constructor(
    protected readonly service: GameObjectTemplateAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
