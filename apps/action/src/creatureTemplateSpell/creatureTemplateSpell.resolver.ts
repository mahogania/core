import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTemplateSpellResolverBase } from "./base/creatureTemplateSpell.resolver.base";
import { CreatureTemplateSpell } from "./base/CreatureTemplateSpell";
import { CreatureTemplateSpellService } from "./creatureTemplateSpell.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateSpell)
export class CreatureTemplateSpellResolver extends CreatureTemplateSpellResolverBase {
  constructor(
    protected readonly service: CreatureTemplateSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
