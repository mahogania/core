import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameObjectTemplateLocaleResolverBase } from "./base/gameObjectTemplateLocale.resolver.base";
import { GameObjectTemplateLocale } from "./base/GameObjectTemplateLocale";
import { GameObjectTemplateLocaleService } from "./gameObjectTemplateLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectTemplateLocale)
export class GameObjectTemplateLocaleResolver extends GameObjectTemplateLocaleResolverBase {
  constructor(
    protected readonly service: GameObjectTemplateLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
