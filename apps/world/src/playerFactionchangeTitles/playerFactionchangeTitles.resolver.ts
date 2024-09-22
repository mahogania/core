import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerFactionchangeTitlesResolverBase } from "./base/playerFactionchangeTitles.resolver.base";
import { PlayerFactionchangeTitles } from "./base/PlayerFactionchangeTitles";
import { PlayerFactionchangeTitlesService } from "./playerFactionchangeTitles.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionchangeTitles)
export class PlayerFactionchangeTitlesResolver extends PlayerFactionchangeTitlesResolverBase {
  constructor(
    protected readonly service: PlayerFactionchangeTitlesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
