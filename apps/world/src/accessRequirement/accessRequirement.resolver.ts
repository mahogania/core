import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccessRequirementResolverBase } from "./base/accessRequirement.resolver.base";
import { AccessRequirement } from "./base/AccessRequirement";
import { AccessRequirementService } from "./accessRequirement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccessRequirement)
export class AccessRequirementResolver extends AccessRequirementResolverBase {
  constructor(
    protected readonly service: AccessRequirementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
