import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SpawnGroupResolverBase } from "./base/spawnGroup.resolver.base";
import { SpawnGroup } from "./base/SpawnGroup";
import { SpawnGroupService } from "./spawnGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SpawnGroup)
export class SpawnGroupResolver extends SpawnGroupResolverBase {
  constructor(
    protected readonly service: SpawnGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
