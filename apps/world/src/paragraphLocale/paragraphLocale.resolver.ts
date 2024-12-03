import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ParagraphLocaleResolverBase } from "./base/paragraphLocale.resolver.base";
import { ParagraphLocale } from "./base/ParagraphLocale";
import { ParagraphLocaleService } from "./paragraphLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ParagraphLocale)
export class ParagraphLocaleResolver extends ParagraphLocaleResolverBase {
  constructor(
    protected readonly service: ParagraphLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
