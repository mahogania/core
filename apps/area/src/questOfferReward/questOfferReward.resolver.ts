import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestOfferRewardResolverBase } from "./base/questOfferReward.resolver.base";
import { QuestOfferReward } from "./base/QuestOfferReward";
import { QuestOfferRewardService } from "./questOfferReward.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestOfferReward)
export class QuestOfferRewardResolver extends QuestOfferRewardResolverBase {
  constructor(
    protected readonly service: QuestOfferRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
