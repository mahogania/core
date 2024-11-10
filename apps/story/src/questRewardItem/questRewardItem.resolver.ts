import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestRewardItemResolverBase } from "./base/questRewardItem.resolver.base";
import { QuestRewardItem } from "./base/QuestRewardItem";
import { QuestRewardItemService } from "./questRewardItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRewardItem)
export class QuestRewardItemResolver extends QuestRewardItemResolverBase {
  constructor(
    protected readonly service: QuestRewardItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
