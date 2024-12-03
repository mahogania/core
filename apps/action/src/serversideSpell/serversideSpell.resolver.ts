import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServersideSpellResolverBase } from "./base/serversideSpell.resolver.base";
import { ServersideSpell } from "./base/ServersideSpell";
import { ServersideSpellService } from "./serversideSpell.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServersideSpell)
export class ServersideSpellResolver extends ServersideSpellResolverBase {
  constructor(
    protected readonly service: ServersideSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
