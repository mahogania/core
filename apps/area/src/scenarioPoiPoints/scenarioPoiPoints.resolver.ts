import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScenarioPoiPointsResolverBase } from "./base/scenarioPoiPoints.resolver.base";
import { ScenarioPoiPoints } from "./base/ScenarioPoiPoints";
import { ScenarioPoiPointsService } from "./scenarioPoiPoints.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScenarioPoiPoints)
export class ScenarioPoiPointsResolver extends ScenarioPoiPointsResolverBase {
  constructor(
    protected readonly service: ScenarioPoiPointsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
