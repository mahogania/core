import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestRewardChoiceItemsResolverBase } from "./base/questRewardChoiceItems.resolver.base";
import { QuestRewardChoiceItems } from "./base/QuestRewardChoiceItems";
import { QuestRewardChoiceItemsService } from "./questRewardChoiceItems.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRewardChoiceItems)
export class QuestRewardChoiceItemsResolver extends QuestRewardChoiceItemsResolverBase {
  constructor(
    protected readonly service: QuestRewardChoiceItemsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
