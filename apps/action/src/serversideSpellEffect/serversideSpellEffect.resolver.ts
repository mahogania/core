import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServersideSpellEffectResolverBase } from "./base/serversideSpellEffect.resolver.base";
import { ServersideSpellEffect } from "./base/ServersideSpellEffect";
import { ServersideSpellEffectService } from "./serversideSpellEffect.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServersideSpellEffect)
export class ServersideSpellEffectResolver extends ServersideSpellEffectResolverBase {
  constructor(
    protected readonly service: ServersideSpellEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
