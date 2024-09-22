import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTriggerCreatePropertiesOrbitResolverBase } from "./base/areaTriggerCreatePropertiesOrbit.resolver.base";
import { AreaTriggerCreatePropertiesOrbit } from "./base/AreaTriggerCreatePropertiesOrbit";
import { AreaTriggerCreatePropertiesOrbitService } from "./areaTriggerCreatePropertiesOrbit.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerCreatePropertiesOrbit)
export class AreaTriggerCreatePropertiesOrbitResolver extends AreaTriggerCreatePropertiesOrbitResolverBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesOrbitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
