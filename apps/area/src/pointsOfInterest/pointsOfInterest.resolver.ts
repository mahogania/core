import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PointsOfInterestResolverBase } from "./base/pointsOfInterest.resolver.base";
import { PointsOfInterest } from "./base/PointsOfInterest";
import { PointsOfInterestService } from "./pointsOfInterest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PointsOfInterest)
export class PointsOfInterestResolver extends PointsOfInterestResolverBase {
  constructor(
    protected readonly service: PointsOfInterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
