import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestRequestItemsResolverBase } from "./base/questRequestItems.resolver.base";
import { QuestRequestItems } from "./base/QuestRequestItems";
import { QuestRequestItemsService } from "./questRequestItems.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRequestItems)
export class QuestRequestItemsResolver extends QuestRequestItemsResolverBase {
  constructor(
    protected readonly service: QuestRequestItemsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
