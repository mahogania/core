import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SpellEffectResolverBase } from "./base/spellEffect.resolver.base";
import { SpellEffect } from "./base/SpellEffect";
import { SpellEffectService } from "./spellEffect.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SpellEffect)
export class SpellEffectResolver extends SpellEffectResolverBase {
  constructor(
    protected readonly service: SpellEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
