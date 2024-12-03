import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameObjectQuestEnderResolverBase } from "./base/gameObjectQuestEnder.resolver.base";
import { GameObjectQuestEnder } from "./base/GameObjectQuestEnder";
import { GameObjectQuestEnderService } from "./gameObjectQuestEnder.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectQuestEnder)
export class GameObjectQuestEnderResolver extends GameObjectQuestEnderResolverBase {
  constructor(
    protected readonly service: GameObjectQuestEnderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
