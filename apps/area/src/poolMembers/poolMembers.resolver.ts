import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PoolMembersResolverBase } from "./base/poolMembers.resolver.base";
import { PoolMembers } from "./base/PoolMembers";
import { PoolMembersService } from "./poolMembers.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PoolMembers)
export class PoolMembersResolver extends PoolMembersResolverBase {
  constructor(
    protected readonly service: PoolMembersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
