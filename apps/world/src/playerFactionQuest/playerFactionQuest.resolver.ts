import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerFactionQuestResolverBase } from "./base/playerFactionQuest.resolver.base";
import { PlayerFactionQuest } from "./base/PlayerFactionQuest";
import { PlayerFactionQuestService } from "./playerFactionQuest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionQuest)
export class PlayerFactionQuestResolver extends PlayerFactionQuestResolverBase {
  constructor(
    protected readonly service: PlayerFactionQuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
