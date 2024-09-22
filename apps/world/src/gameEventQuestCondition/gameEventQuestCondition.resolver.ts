import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventQuestConditionResolverBase } from "./base/gameEventQuestCondition.resolver.base";
import { GameEventQuestCondition } from "./base/GameEventQuestCondition";
import { GameEventQuestConditionService } from "./gameEventQuestCondition.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventQuestCondition)
export class GameEventQuestConditionResolver extends GameEventQuestConditionResolverBase {
  constructor(
    protected readonly service: GameEventQuestConditionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
