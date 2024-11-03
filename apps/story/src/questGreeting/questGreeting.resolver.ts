import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestGreetingResolverBase } from "./base/questGreeting.resolver.base";
import { QuestGreeting } from "./base/QuestGreeting";
import { QuestGreetingService } from "./questGreeting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestGreeting)
export class QuestGreetingResolver extends QuestGreetingResolverBase {
  constructor(
    protected readonly service: QuestGreetingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
