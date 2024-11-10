import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameObjectQuestItemResolverBase } from "./base/gameObjectQuestItem.resolver.base";
import { GameObjectQuestItem } from "./base/GameObjectQuestItem";
import { GameObjectQuestItemService } from "./gameObjectQuestItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectQuestItem)
export class GameObjectQuestItemResolver extends GameObjectQuestItemResolverBase {
  constructor(
    protected readonly service: GameObjectQuestItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
