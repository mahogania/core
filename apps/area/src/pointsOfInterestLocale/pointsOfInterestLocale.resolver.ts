import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PointsOfInterestLocaleResolverBase } from "./base/pointsOfInterestLocale.resolver.base";
import { PointsOfInterestLocale } from "./base/PointsOfInterestLocale";
import { PointsOfInterestLocaleService } from "./pointsOfInterestLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PointsOfInterestLocale)
export class PointsOfInterestLocaleResolver extends PointsOfInterestLocaleResolverBase {
  constructor(
    protected readonly service: PointsOfInterestLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
