import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScriptSplineChainWaypointsResolverBase } from "./base/scriptSplineChainWaypoints.resolver.base";
import { ScriptSplineChainWaypoints } from "./base/ScriptSplineChainWaypoints";
import { ScriptSplineChainWaypointsService } from "./scriptSplineChainWaypoints.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScriptSplineChainWaypoints)
export class ScriptSplineChainWaypointsResolver extends ScriptSplineChainWaypointsResolverBase {
  constructor(
    protected readonly service: ScriptSplineChainWaypointsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
