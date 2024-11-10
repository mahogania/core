import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerFactionSpellResolverBase } from "./base/playerFactionSpell.resolver.base";
import { PlayerFactionSpell } from "./base/PlayerFactionSpell";
import { PlayerFactionSpellService } from "./playerFactionSpell.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionSpell)
export class PlayerFactionSpellResolver extends PlayerFactionSpellResolverBase {
  constructor(
    protected readonly service: PlayerFactionSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
