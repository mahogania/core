import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PointOfInterestResolverBase } from "./base/pointOfInterest.resolver.base";
import { PointOfInterest } from "./base/PointOfInterest";
import { PointOfInterestService } from "./pointOfInterest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PointOfInterest)
export class PointOfInterestResolver extends PointOfInterestResolverBase {
  constructor(
    protected readonly service: PointOfInterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
