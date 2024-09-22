import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventCreatureQuestResolverBase } from "./base/gameEventCreatureQuest.resolver.base";
import { GameEventCreatureQuest } from "./base/GameEventCreatureQuest";
import { GameEventCreatureQuestService } from "./gameEventCreatureQuest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventCreatureQuest)
export class GameEventCreatureQuestResolver extends GameEventCreatureQuestResolverBase {
  constructor(
    protected readonly service: GameEventCreatureQuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
