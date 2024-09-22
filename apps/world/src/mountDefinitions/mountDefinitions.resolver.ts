import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MountDefinitionsResolverBase } from "./base/mountDefinitions.resolver.base";
import { MountDefinitions } from "./base/MountDefinitions";
import { MountDefinitionsService } from "./mountDefinitions.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MountDefinitions)
export class MountDefinitionsResolver extends MountDefinitionsResolverBase {
  constructor(
    protected readonly service: MountDefinitionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
