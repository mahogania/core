import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameObjectTemplateResolverBase } from "./base/gameObjectTemplate.resolver.base";
import { GameObjectTemplate } from "./base/GameObjectTemplate";
import { GameObjectTemplateService } from "./gameObjectTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectTemplate)
export class GameObjectTemplateResolver extends GameObjectTemplateResolverBase {
  constructor(
    protected readonly service: GameObjectTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
