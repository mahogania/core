import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestRequestItemResolverBase } from "./base/questRequestItem.resolver.base";
import { QuestRequestItem } from "./base/QuestRequestItem";
import { QuestRequestItemService } from "./questRequestItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRequestItem)
export class QuestRequestItemResolver extends QuestRequestItemResolverBase {
  constructor(
    protected readonly service: QuestRequestItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
