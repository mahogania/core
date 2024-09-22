import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventGameObjectQuestResolverBase } from "./base/gameEventGameObjectQuest.resolver.base";
import { GameEventGameObjectQuest } from "./base/GameEventGameObjectQuest";
import { GameEventGameObjectQuestService } from "./gameEventGameObjectQuest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventGameObjectQuest)
export class GameEventGameObjectQuestResolver extends GameEventGameObjectQuestResolverBase {
  constructor(
    protected readonly service: GameEventGameObjectQuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
