import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SmartScriptsResolverBase } from "./base/smartScripts.resolver.base";
import { SmartScripts } from "./base/SmartScripts";
import { SmartScriptsService } from "./smartScripts.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SmartScripts)
export class SmartScriptsResolver extends SmartScriptsResolverBase {
  constructor(
    protected readonly service: SmartScriptsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
