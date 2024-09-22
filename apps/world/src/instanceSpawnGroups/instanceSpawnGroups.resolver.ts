import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InstanceSpawnGroupsResolverBase } from "./base/instanceSpawnGroups.resolver.base";
import { InstanceSpawnGroups } from "./base/InstanceSpawnGroups";
import { InstanceSpawnGroupsService } from "./instanceSpawnGroups.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InstanceSpawnGroups)
export class InstanceSpawnGroupsResolver extends InstanceSpawnGroupsResolverBase {
  constructor(
    protected readonly service: InstanceSpawnGroupsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
