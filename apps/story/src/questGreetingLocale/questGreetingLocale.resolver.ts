import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestGreetingLocaleResolverBase } from "./base/questGreetingLocale.resolver.base";
import { QuestGreetingLocale } from "./base/QuestGreetingLocale";
import { QuestGreetingLocaleService } from "./questGreetingLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestGreetingLocale)
export class QuestGreetingLocaleResolver extends QuestGreetingLocaleResolverBase {
  constructor(
    protected readonly service: QuestGreetingLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
