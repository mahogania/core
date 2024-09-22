import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerFactionchangeQuestsResolverBase } from "./base/playerFactionchangeQuests.resolver.base";
import { PlayerFactionchangeQuests } from "./base/PlayerFactionchangeQuests";
import { PlayerFactionchangeQuestsService } from "./playerFactionchangeQuests.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionchangeQuests)
export class PlayerFactionchangeQuestsResolver extends PlayerFactionchangeQuestsResolverBase {
  constructor(
    protected readonly service: PlayerFactionchangeQuestsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
