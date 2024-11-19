import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameObjectLootTemplateResolverBase } from "./base/gameObjectLootTemplate.resolver.base";
import { GameObjectLootTemplate } from "./base/GameObjectLootTemplate";
import { GameObjectLootTemplateService } from "./gameObjectLootTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectLootTemplate)
export class GameObjectLootTemplateResolver extends GameObjectLootTemplateResolverBase {
  constructor(
    protected readonly service: GameObjectLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
