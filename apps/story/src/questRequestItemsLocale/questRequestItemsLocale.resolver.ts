import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestRequestItemsLocaleResolverBase } from "./base/questRequestItemsLocale.resolver.base";
import { QuestRequestItemsLocale } from "./base/QuestRequestItemsLocale";
import { QuestRequestItemsLocaleService } from "./questRequestItemsLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRequestItemsLocale)
export class QuestRequestItemsLocaleResolver extends QuestRequestItemsLocaleResolverBase {
  constructor(
    protected readonly service: QuestRequestItemsLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
