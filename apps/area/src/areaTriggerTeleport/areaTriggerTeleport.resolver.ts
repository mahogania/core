import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTriggerTeleportResolverBase } from "./base/areaTriggerTeleport.resolver.base";
import { AreaTriggerTeleport } from "./base/AreaTriggerTeleport";
import { AreaTriggerTeleportService } from "./areaTriggerTeleport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerTeleport)
export class AreaTriggerTeleportResolver extends AreaTriggerTeleportResolverBase {
  constructor(
    protected readonly service: AreaTriggerTeleportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
