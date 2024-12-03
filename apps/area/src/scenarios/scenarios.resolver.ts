import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScenariosResolverBase } from "./base/scenarios.resolver.base";
import { Scenarios } from "./base/Scenarios";
import { ScenariosService } from "./scenarios.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Scenarios)
export class ScenariosResolver extends ScenariosResolverBase {
  constructor(
    protected readonly service: ScenariosService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
