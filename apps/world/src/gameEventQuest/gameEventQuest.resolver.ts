import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventQuestResolverBase } from "./base/gameEventQuest.resolver.base";
import { GameEventQuest } from "./base/GameEventQuest";
import { GameEventQuestService } from "./gameEventQuest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventQuest)
export class GameEventQuestResolver extends GameEventQuestResolverBase {
  constructor(
    protected readonly service: GameEventQuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
