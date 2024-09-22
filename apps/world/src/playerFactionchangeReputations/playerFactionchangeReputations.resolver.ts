import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerFactionchangeReputationsResolverBase } from "./base/playerFactionchangeReputations.resolver.base";
import { PlayerFactionchangeReputations } from "./base/PlayerFactionchangeReputations";
import { PlayerFactionchangeReputationsService } from "./playerFactionchangeReputations.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionchangeReputations)
export class PlayerFactionchangeReputationsResolver extends PlayerFactionchangeReputationsResolverBase {
  constructor(
    protected readonly service: PlayerFactionchangeReputationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
