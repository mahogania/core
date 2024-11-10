import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestOfferRewardConditionalResolverBase } from "./base/questOfferRewardConditional.resolver.base";
import { QuestOfferRewardConditional } from "./base/QuestOfferRewardConditional";
import { QuestOfferRewardConditionalService } from "./questOfferRewardConditional.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestOfferRewardConditional)
export class QuestOfferRewardConditionalResolver extends QuestOfferRewardConditionalResolverBase {
  constructor(
    protected readonly service: QuestOfferRewardConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
