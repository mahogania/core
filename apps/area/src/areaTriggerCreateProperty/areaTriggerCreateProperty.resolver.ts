import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTriggerCreatePropertyResolverBase } from "./base/areaTriggerCreateProperty.resolver.base";
import { AreaTriggerCreateProperty } from "./base/AreaTriggerCreateProperty";
import { AreaTriggerCreatePropertyService } from "./areaTriggerCreateProperty.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerCreateProperty)
export class AreaTriggerCreatePropertyResolver extends AreaTriggerCreatePropertyResolverBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
