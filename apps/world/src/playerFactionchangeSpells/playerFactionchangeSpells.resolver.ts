import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerFactionchangeSpellsResolverBase } from "./base/playerFactionchangeSpells.resolver.base";
import { PlayerFactionchangeSpells } from "./base/PlayerFactionchangeSpells";
import { PlayerFactionchangeSpellsService } from "./playerFactionchangeSpells.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionchangeSpells)
export class PlayerFactionchangeSpellsResolver extends PlayerFactionchangeSpellsResolverBase {
  constructor(
    protected readonly service: PlayerFactionchangeSpellsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
