import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameEventConditionResolverBase } from "./base/gameEventCondition.resolver.base";
import { GameEventCondition } from "./base/GameEventCondition";
import { GameEventConditionService } from "./gameEventCondition.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEventCondition)
export class GameEventConditionResolver extends GameEventConditionResolverBase {
  constructor(
    protected readonly service: GameEventConditionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
