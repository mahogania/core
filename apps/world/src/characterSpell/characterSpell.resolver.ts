import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CharacterSpellResolverBase } from "./base/characterSpell.resolver.base";
import { CharacterSpell } from "./base/CharacterSpell";
import { CharacterSpellService } from "./characterSpell.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CharacterSpell)
export class CharacterSpellResolver extends CharacterSpellResolverBase {
  constructor(
    protected readonly service: CharacterSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
