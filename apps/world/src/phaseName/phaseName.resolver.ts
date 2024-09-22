import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PhaseNameResolverBase } from "./base/phaseName.resolver.base";
import { PhaseName } from "./base/PhaseName";
import { PhaseNameService } from "./phaseName.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PhaseName)
export class PhaseNameResolver extends PhaseNameResolverBase {
  constructor(
    protected readonly service: PhaseNameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
