import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PageTextLocaleResolverBase } from "./base/pageTextLocale.resolver.base";
import { PageTextLocale } from "./base/PageTextLocale";
import { PageTextLocaleService } from "./pageTextLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PageTextLocale)
export class PageTextLocaleResolver extends PageTextLocaleResolverBase {
  constructor(
    protected readonly service: PageTextLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
