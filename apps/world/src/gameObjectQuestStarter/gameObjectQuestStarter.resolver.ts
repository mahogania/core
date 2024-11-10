import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameObjectQuestStarterResolverBase } from "./base/gameObjectQuestStarter.resolver.base";
import { GameObjectQuestStarter } from "./base/GameObjectQuestStarter";
import { GameObjectQuestStarterService } from "./gameObjectQuestStarter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameObjectQuestStarter)
export class GameObjectQuestStarterResolver extends GameObjectQuestStarterResolverBase {
  constructor(
    protected readonly service: GameObjectQuestStarterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
