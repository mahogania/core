import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScenarioRegionResolverBase } from "./base/scenarioRegion.resolver.base";
import { ScenarioRegion } from "./base/ScenarioRegion";
import { ScenarioRegionService } from "./scenarioRegion.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScenarioRegion)
export class ScenarioRegionResolver extends ScenarioRegionResolverBase {
  constructor(
    protected readonly service: ScenarioRegionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
