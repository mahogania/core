import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestTemplateLocaleResolverBase } from "./base/questTemplateLocale.resolver.base";
import { QuestTemplateLocale } from "./base/QuestTemplateLocale";
import { QuestTemplateLocaleService } from "./questTemplateLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestTemplateLocale)
export class QuestTemplateLocaleResolver extends QuestTemplateLocaleResolverBase {
  constructor(
    protected readonly service: QuestTemplateLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
