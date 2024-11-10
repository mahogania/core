import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTeleportTriggerResolverBase } from "./base/areaTeleportTrigger.resolver.base";
import { AreaTeleportTrigger } from "./base/AreaTeleportTrigger";
import { AreaTeleportTriggerService } from "./areaTeleportTrigger.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTeleportTrigger)
export class AreaTeleportTriggerResolver extends AreaTeleportTriggerResolverBase {
  constructor(
    protected readonly service: AreaTeleportTriggerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
