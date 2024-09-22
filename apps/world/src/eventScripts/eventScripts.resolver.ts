import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EventScriptsResolverBase } from "./base/eventScripts.resolver.base";
import { EventScripts } from "./base/EventScripts";
import { EventScriptsService } from "./eventScripts.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EventScripts)
export class EventScriptsResolver extends EventScriptsResolverBase {
  constructor(
    protected readonly service: EventScriptsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
