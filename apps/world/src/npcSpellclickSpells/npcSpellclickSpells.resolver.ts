import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NpcSpellclickSpellsResolverBase } from "./base/npcSpellclickSpells.resolver.base";
import { NpcSpellclickSpells } from "./base/NpcSpellclickSpells";
import { NpcSpellclickSpellsService } from "./npcSpellclickSpells.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NpcSpellclickSpells)
export class NpcSpellclickSpellsResolver extends NpcSpellclickSpellsResolverBase {
  constructor(
    protected readonly service: NpcSpellclickSpellsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
