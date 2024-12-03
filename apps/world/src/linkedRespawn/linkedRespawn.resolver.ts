import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LinkedRespawnResolverBase } from "./base/linkedRespawn.resolver.base";
import { LinkedRespawn } from "./base/LinkedRespawn";
import { LinkedRespawnService } from "./linkedRespawn.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LinkedRespawn)
export class LinkedRespawnResolver extends LinkedRespawnResolverBase {
  constructor(
    protected readonly service: LinkedRespawnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
