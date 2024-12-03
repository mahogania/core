import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerFactionReputationResolverBase } from "./base/playerFactionReputation.resolver.base";
import { PlayerFactionReputation } from "./base/PlayerFactionReputation";
import { PlayerFactionReputationService } from "./playerFactionReputation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionReputation)
export class PlayerFactionReputationResolver extends PlayerFactionReputationResolverBase {
  constructor(
    protected readonly service: PlayerFactionReputationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
