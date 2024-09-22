import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EventScriptNamesResolverBase } from "./base/eventScriptNames.resolver.base";
import { EventScriptNames } from "./base/EventScriptNames";
import { EventScriptNamesService } from "./eventScriptNames.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EventScriptNames)
export class EventScriptNamesResolver extends EventScriptNamesResolverBase {
  constructor(
    protected readonly service: EventScriptNamesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
