import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTriggerScriptResolverBase } from "./base/areaTriggerScript.resolver.base";
import { AreaTriggerScript } from "./base/AreaTriggerScript";
import { AreaTriggerScriptService } from "./areaTriggerScript.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerScript)
export class AreaTriggerScriptResolver extends AreaTriggerScriptResolverBase {
  constructor(
    protected readonly service: AreaTriggerScriptService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
