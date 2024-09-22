import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { JumpChargeParamsResolverBase } from "./base/jumpChargeParams.resolver.base";
import { JumpChargeParams } from "./base/JumpChargeParams";
import { JumpChargeParamsService } from "./jumpChargeParams.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => JumpChargeParams)
export class JumpChargeParamsResolver extends JumpChargeParamsResolverBase {
  constructor(
    protected readonly service: JumpChargeParamsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
