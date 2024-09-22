import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PhaseAreaResolverBase } from "./base/phaseArea.resolver.base";
import { PhaseArea } from "./base/PhaseArea";
import { PhaseAreaService } from "./phaseArea.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PhaseArea)
export class PhaseAreaResolver extends PhaseAreaResolverBase {
  constructor(
    protected readonly service: PhaseAreaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
