import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTriggerCreatePropertiesSplinePointResolverBase } from "./base/areaTriggerCreatePropertiesSplinePoint.resolver.base";
import { AreaTriggerCreatePropertiesSplinePoint } from "./base/AreaTriggerCreatePropertiesSplinePoint";
import { AreaTriggerCreatePropertiesSplinePointService } from "./areaTriggerCreatePropertiesSplinePoint.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerCreatePropertiesSplinePoint)
export class AreaTriggerCreatePropertiesSplinePointResolver extends AreaTriggerCreatePropertiesSplinePointResolverBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesSplinePointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
