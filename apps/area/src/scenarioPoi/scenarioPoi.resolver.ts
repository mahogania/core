import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScenarioPoiResolverBase } from "./base/scenarioPoi.resolver.base";
import { ScenarioPoi } from "./base/ScenarioPoi";
import { ScenarioPoiService } from "./scenarioPoi.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScenarioPoi)
export class ScenarioPoiResolver extends ScenarioPoiResolverBase {
  constructor(
    protected readonly service: ScenarioPoiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
