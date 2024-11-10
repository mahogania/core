import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerFactionTitleResolverBase } from "./base/playerFactionTitle.resolver.base";
import { PlayerFactionTitle } from "./base/PlayerFactionTitle";
import { PlayerFactionTitleService } from "./playerFactionTitle.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionTitle)
export class PlayerFactionTitleResolver extends PlayerFactionTitleResolverBase {
  constructor(
    protected readonly service: PlayerFactionTitleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
