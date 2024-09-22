import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventSeasonalQuestRelationResolverBase } from "./base/gameEventSeasonalQuestRelation.resolver.base";
import { GameEventSeasonalQuestRelation } from "./base/GameEventSeasonalQuestRelation";
import { GameEventSeasonalQuestRelationService } from "./gameEventSeasonalQuestRelation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventSeasonalQuestRelation)
export class GameEventSeasonalQuestRelationResolver extends GameEventSeasonalQuestRelationResolverBase {
  constructor(
    protected readonly service: GameEventSeasonalQuestRelationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
