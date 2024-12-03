import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestOfferRewardLocaleResolverBase } from "./base/questOfferRewardLocale.resolver.base";
import { QuestOfferRewardLocale } from "./base/QuestOfferRewardLocale";
import { QuestOfferRewardLocaleService } from "./questOfferRewardLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestOfferRewardLocale)
export class QuestOfferRewardLocaleResolver extends QuestOfferRewardLocaleResolverBase {
  constructor(
    protected readonly service: QuestOfferRewardLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
