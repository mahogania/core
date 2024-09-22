import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestRequestItemsConditionalResolverBase } from "./base/questRequestItemsConditional.resolver.base";
import { QuestRequestItemsConditional } from "./base/QuestRequestItemsConditional";
import { QuestRequestItemsConditionalService } from "./questRequestItemsConditional.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestRequestItemsConditional)
export class QuestRequestItemsConditionalResolver extends QuestRequestItemsConditionalResolverBase {
  constructor(
    protected readonly service: QuestRequestItemsConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
